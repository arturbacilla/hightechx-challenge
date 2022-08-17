const { User } = require('../models');

const createUser = (userInfo) => User.create({
  ...userInfo,
  status: 'Ativo',
})
  .then((created) => created)
  .catch((error) => error);

module.exports = {
  createUser,
};
