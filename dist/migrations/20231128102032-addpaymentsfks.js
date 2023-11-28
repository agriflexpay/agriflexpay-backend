'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('payment', 'user_uuid', {
      type: Sequelize.UUID,
      references: {
        model: "user",
        key: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  


    await queryInterface.addColumn('payment','agency_uuid',{
      type:Sequelize.UUID,
      references:{
        model:"agency",
        key:'id'
      }
    }),


  
    await queryInterface.addColumn('payment','plan_uuid',{
      type:Sequelize.UUID,
      references:{
        model:"plan",
        key:'id'
      }
    })
 
    await queryInterface.addColumn('payment','phone',{
      type:Sequelize.INTEGER,
      references:{
        model:"user",
        key:'phone'
      }
    })
  

},
  async down (queryInterface, Sequelize) {
  await queryInterface.removeColumn('payment', 'user_uuid');
  await queryInterface.removeColumn('payment',"phone")
  await queryInterface.removeColumn('payment',"agency_uuid")
  await queryInterface.removeColumn('payment',"plan_uuid")
}
}