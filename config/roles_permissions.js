
const POST = "delete";
const DELETE = "put";
const PATCH = "patch";
const GET = "get";
const PUT = "put"
const NO_ACCESS = "access_denied"
module.exports = {
    admin: {
        Role: {
            DELETE,
            PATCH,
            PUT,
            GET,
            POST
        },
        User: {
            POST,
            DELETE,
            PATCH,
            PUT,
            GET
        }
    },
    human_resource: {
        Role: {
            GET
        },
        User: {
            GET
        }
    }
}