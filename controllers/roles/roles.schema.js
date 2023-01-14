const {object, string} = require("zod")

/**
 * @openapi
 * components:
 *  schemas:
 *      UserRole:
 *          type: object
 *          title: Role
 *          required:
 *              - role_name
 *          properties:
 *              role_name:
 *                  type: string
 *                  example: admin
 */
const LoginUser = object({
    body: object({
        role_name: string({
            required_error: "role_name is required"
        })
    })
});

module.exports = LoginUser;