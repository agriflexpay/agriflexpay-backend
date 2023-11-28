'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('guaranter', 'address_id', {
      type: Sequelize.UUID,
      references: {
        model: "address",
        key: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  
  await queryInterface.addColumn('user', 'user_id', {
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

    await queryInterface.removeColumn('guaranter', 'address_id');
    await queryInterface.removeColumn('user', 'user_id');
  }
};
