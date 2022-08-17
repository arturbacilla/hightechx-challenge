module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'Admin',
      email: 'admin@admin.com',
      cpf: '000.000.000-00',
      phone: '00000000000',
      birthdate: new Date(),
      status: 'Ativo',
    }], {});
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
