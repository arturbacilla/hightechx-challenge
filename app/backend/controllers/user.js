const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/user');
const getUserFromDB = require('../services/login');

const { UNAUTHORIZED, CREATED, INTERNAL_SERVER_ERROR } = StatusCodes;
const msgs = {
  USER_FOUND: 'User already exists.',
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

module.exports = {
  createUser,
};
