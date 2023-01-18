const express = require("express");
const router = express.Router();
const Role = require("../../models/index")["Role"];
const createRole = require("./roles.schema");
const validateSchema = require("../../middleware/validateSchema");
const authorize = require("./../../middleware/authorize");

/**
 * @openapi
 * /role:
 *   post:
 *     tags:
 *      - User Role
 *     summary: Create role
 *     description: Create role for a user
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/UserRole'
 *     responses:
 *       200:
 *         description: Role created successfully
 *
 */
router.post(
  "/",
  authorize(["User"]),
  validateSchema(createRole),
  async (req, res) => {
    // Access only to users how has access on Role and User Models for POST calls
    try {
      let role = await Role.create({
        roleName: req.body.role_name,
      });
      res.status(200).send({
        roleId: role.id,
        roleName: role.roleName,
      });
    } catch (error) {
      res.status(500).send({
        error: "Error creating the role",
      });
    }
  }
);

/**
 * @openapi
 * /role:
 *   get:
 *     tags:
 *      - User Role
 *     summary: Get all roles
 *     description: Get all roles
 *     responses:
 *       200:
 *         description: Roles fetched  successfully
 *
 */
router.get("/", async (req, res) => {
  try {
    let roles = await Role.findAll();
    res.status(200).send(roles);
  } catch (error) {
    console.log("error>>>>>", error);
    res.status(500).send({
      error: "Error getting the role",
    });
  }
});

module.exports = {
  router: router,
  modelName: Role.name,
};
