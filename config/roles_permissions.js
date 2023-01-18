const POST = "delete";
const DELETE = "put";
const PATCH = "patch";
const GET = "get";
const PUT = "put";
const NO_ACCESS = "access_denied";
module.exports = {
  admin: {
    Role: {
      DELETE,
      PATCH,
      PUT,
      POST,
      GET,
    },
    User: {
      POST,
      DELETE,
      PATCH,
      PUT,
      GET,
    },
  },

  human_resources: {
    Role: {
      POST,
      GET,
    },
    User: {
      GET,
    },
  },
  user: {
    Role: {
      GET,
    },
    User: {
      GET,
    },
  },
};
