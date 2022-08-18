const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/user');
const getUserFromDB = require('../services/login');

const {
  UNAUTHORIZED,
  CREATED,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  OK,
  NO_CONTENT,
} = StatusCodes;

const msgs = {
  USER_FOUND: 'User already exists.',
  USER_NF: 'User not found.',
  CPF_EXISTS: 'CPF already exists.',
};

const createUser = async (req, res) => {
  const userInfo = req.body;
  const userExists = await getUserFromDB(userInfo.email);
  if (userExists) return res.status(UNAUTHORIZED).json({ message: msgs.USER_FOUND });
  try {
    const created = await UserService.createUser(userInfo);
    if ('errors' in created && created.errors[0].path === 'cpf') return res.status(UNAUTHORIZED).json({ message: msgs.CPF_EXISTS });
    if (!created) return res.status(INTERNAL_SERVER_ERROR).end();
    return res.status(CREATED).json(created);
  } catch (error) {
    console.log(error);
  }
};

const readUsers = async (_req, res) => {
  const allUsers = await UserService.readUsers();
  if (!allUsers) return res.status(INTERNAL_SERVER_ERROR).end();
  if (allUsers.length === 0) return res.status(NOT_FOUND).json(allUsers);
  return res.status(OK).json(allUsers);
};

const readUser = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.readUser(id);
  if (!user) return res.status(NOT_FOUND).json({ message: msgs.USER_NF });
  return res.status(OK).json(user);
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const userId = Number(id);
  const newInfo = req.body;
  const editedUser = await UserService.editUser(userId, newInfo);
  if (!editedUser) return res.status(NOT_FOUND).json({ message: msgs.USER_NF });
  return res.status(OK).json(editedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.deleteUser(id);
  if (!user) return res.status(NOT_FOUND).json({ message: msgs.USER_NF });
  return res.status(NO_CONTENT).end();
};

module.exports = {
  createUser,
  readUsers,
  readUser,
  deleteUser,
  editUser,
};
