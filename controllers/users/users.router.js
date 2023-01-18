const express = require("express");
const router = express.Router();
const User = require("../../models/index")["User"];
const Role = require("../../models/index")["Role"];
const jwt = require("jsonwebtoken");
const passport = require("passport");

var bcrypt = require("bcrypt");
/**
 * @openapi
 * /user/login:
 *   post:
 *     tags:
 *      - User
 *     summary: Login user
 *     description: Login User
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/LoginUser'
 *     responses:
 *       200:
 *         description: Login successful
 *
 */
router.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        username: req.body.username,
        isActive: true,
      },
      include: Role,
    });
    if (!user) {
      res.status(401).send({
        error: "Username is not present or inactive. Cannot login.",
      });
    } else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign(
          { id: user.id, role: user.Role.roleName },
          "your_jwt_secret",
          { expiresIn: "1d" }
        );
        res.status(201).send({
          token,
        });
      } else {
        res.status(401).send({
          error: "Login Failed",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: error.errors,
    });
  }
});

/**
 * @openapi
 * /user/signup:
 *   post:
 *     tags:
 *      - User
 *     summary: User signup
 *     description: User signup
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/LoginUser'
 *     responses:
 *       200:
 *         description: User created
 *
 */
router.post("/signup", async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (user) {
      res.status(400).send({
        error: "User already exits",
      });
    } else {
      let user = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
      let role = await Role.findOne({
        where: {
          roleName: "user",
        },
      });
      if (role) {
        await role.addUser(user);
      }
      res.status(200).send({
        username: user.username,
        message: "User created successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: error.errors,
    });
  }
});

module.exports = router;
