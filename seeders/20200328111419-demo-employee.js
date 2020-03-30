'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Employees', [
        {
          empName: 'Arifa',
          gender:'female',
          age:26,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          empName: 'Mizan',
          gender:'male',
          age:30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          empName: 'Hasan',
          gender:'male',
          age:28,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          empName: 'Roja',
          gender:'female',
          age:4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          empName: 'Sadia',
          gender:'female',
          age:14,
          createdAt: new Date(),
          updatedAt: new Date()
        }
  
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Employees', null, {});
    
  }
};
