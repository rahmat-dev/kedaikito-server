'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('categories', [
      {
        name: 'Nasi',
        createdAt: new Date(),
        updatedAt: new Date
      }, {
        name: 'Mie & Bakso',
        createdAt: new Date(),
        updatedAt: new Date
      }, {
        name: 'Ayam',
        createdAt: new Date(),
        updatedAt: new Date
      }, {
        name: 'Seafood',
        createdAt: new Date(),
        updatedAt: new Date
      }, {
        name: 'Minuman',
        createdAt: new Date(),
        updatedAt: new Date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
