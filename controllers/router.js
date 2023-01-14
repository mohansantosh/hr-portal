let User = require("./users/users.router");
let Role = require("./roles/roles.router");
let passport = require("../middleware/passport")
let authorize = require("..//middleware/authorize")
let setModelName = require("../middleware/setModelName")

let mainRouter = function(expressApp) {
    expressApp.use('/user', User);
    expressApp.use('/role', passport.authenticate('jwt', {session: false}), setModelName(Role.modelName), authorize(), Role.router);
}

module.exports = mainRouter;