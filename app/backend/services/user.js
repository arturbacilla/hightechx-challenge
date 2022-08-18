const { User } = require('../models');

const createUser = (userInfo) => User.create({
  ...userInfo,
  status: 'Ativo',
})
  .then((created) => created)
  .catch((error) => error);

const readUsers = async () => User.findAll({ raw: true });

const readUser = async (id) => User.findByPk(id, { raw: true });

const editUser = async (id, newInfo) => {
  const [edited] = await User.update(
    { ...newInfo },
    { where: { id } },
  );
  if (!edited) return false;
  const newUser = await User.findByPk(id, { raw: true });
  return newUser;
};

const deleteUser = async (id) => User.destroy({ where: { id } });

module.exports = {
  createUser,
  readUsers,
  readUser,
  editUser,
  deleteUser,
};
