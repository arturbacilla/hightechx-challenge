const { User } = require('../models');

const getUserFromDB = async (email) => {
  const [userDB] = await User.findAll({ where: { email }, raw: true });
  if (!userDB) return false;
  return userDB;
};

module.exports = getUserFromDB;
