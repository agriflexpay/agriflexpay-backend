'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('permission', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      rights: {
        type: Sequelize.JSONB
      },
      has_bypass_rights: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('permission');
  }
};