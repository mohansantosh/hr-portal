const users = require("../models/users");
const allRolesPermissions = require("../config/roles_permissions");

module.exports = function (authzModels) {
  return async (request, response, next) => {
    try {
      let allModels = [];
      //The route does not have any models specified. Don't authorize
      if (
        request.user.Role.roleName == "admin" ||
        (!request.modelName && !authzModels)
      ) {
        return next();
      }

      let roleAllModelsPermissions =
        allRolesPermissions[request.user.Role.roleName];
      if (!roleAllModelsPermissions) {
        throw new Error("Permissions not available for the user's role");
      }
      if (authzModels && authzModels.length > 0) {
        allModels = [request.modelName, ...authzModels];
      } else {
        allModels = [request.modelName];
      }

      let result = allModels.every((model) => {
        let permissions = roleAllModelsPermissions[model];
        if (permissions[request.method]) {
          return true;
        } else {
          return false;
        }
      });

      if (result) {
        return next();
      } else {
        throw new Error("Access Denied");
      }
    } catch (error) {
      response.status(403).send({
        error: error.message,
      });
    }
  };
};
