'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('plan', 'agency_uuid', {
      type: Sequelize.UUID,
      references: {
        model: "agency",
        key: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('plan', 'agency_uuid')

  }
};