const {object, string} = require("zod")

/**
 * @openapi
 * components:
 *  schemas:
 *      LoginUser:
 *          type: object
 *          title: User
 *          required:
 *              - username
 *              - password
 *          properties:
 *              username:
 *                  type: string
 *                  example: admin
 *              password:
 *                  type: string
 *                  example: default
 */
const LoginUser = object({
    body: object({
        username: string({
            required_error: "id is required"
        }).minLength(4),
        password: string({
            required_error: "id is required"
        }).minLength(6)
    })
});

module.exports = LoginUser;