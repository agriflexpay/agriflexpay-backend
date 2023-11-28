'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('permission', 'user_uuid', {
      type: Sequelize.UUID,
      references: {
        model: "user",
        key: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('permission', 'user_uuid');

  }
};