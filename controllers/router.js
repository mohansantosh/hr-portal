let User = require("./users/users.router");
let Role = require("./roles/roles.router");
let passport = require("../middleware/passport");
let authorize = require("..//middleware/authorize");
let setModelName = require("../middleware/setModelName");

let mainRouter = function (expressApp) {
  expressApp.use("/user", User);
  //by default, all the Role routes are authorized. Only users with Role Permissions associated to their roles can access role endpoints
  expressApp.use(
    "/role",
    passport.authenticate("jwt", { session: false }),
    setModelName(Role.modelName),
    authorize(),
    Role.router
  );
};

module.exports = mainRouter;
