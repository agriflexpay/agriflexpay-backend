'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('agency', 'address_id', {
      type: Sequelize.UUID,
      references: {
        model: "address",
        key: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('agency', 'address_id');

  }
};