const { StatusCodes } = require('http-status-codes');
const auth = require('../services/auth');

const getUserFromDB = require('../services/login');

const { NOT_FOUND, OK } = StatusCodes;
const msgs = {
  NOT_FOUND: 'User not found.',
};

const login = async (req, res) => {
  try {
    const userInfo = req.body;
    const user = await getUserFromDB(userInfo.email);
    if (!user) return res.status(NOT_FOUND).json({ message: msgs.NOT_FOUND });
    const token = auth.generateToken(user);
    return res.status(OK).json({ token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
