'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Registration', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      nationalId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      agency_uuid:{
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Agency',
          key: 'id',
        },
      },
      address_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Address',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },

    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Registration');
  }
};
