const crypto = require("crypto");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert("roles", [
        {
          id: crypto.randomUUID(),
          role_name: "admin",
        },
        {
          id: crypto.randomUUID(),
          role_name: "human_resources",
        },
        {
          id: crypto.randomUUID(),
          role_name: "user",
        },
      ]);

      let roleId = await queryInterface.rawSelect(
        "roles",
        {
          where: {
            role_name: "admin",
          },
        },
        ["id"]
      );
      var hash = bcrypt.hashSync("default", salt, null);
      let user = await queryInterface.bulkInsert("users", [
        {
          id: crypto.randomUUID(),
          username: "admin",
          password: hash,
          role_id: roleId,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
      console.log("Done", user);
    } catch (error) {
      console.log("error", error);
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("roles", null, {});
  },
};
