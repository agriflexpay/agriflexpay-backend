'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('disease', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      occurance_pattern: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      causes: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      prevention_and_control: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      transmission: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      signs_and_symptoms: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      treatment: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      victim: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      location_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      farmer_id: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('disease');
  }
};
