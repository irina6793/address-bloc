'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Contacts",
      "Email",
      Sequelize.String
    )
    queryInterface.createTable(
      'EmailToContacts',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        name: {
          type: Sequelize.STRING
        }
      )};
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts', 'Email');

  }
};
