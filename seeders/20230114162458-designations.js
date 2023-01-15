"use strict";
const crypto = require("crypto");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("designations", [
      {
        id: crypto.randomUUID(),
        designation_name: "Sr Software Engineer",
      },
      {
        id: crypto.randomUUID(),
        designation_name: "Software Engineer",
      },
      {
        id: crypto.randomUUID(),
        designation_name: "Manager",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
