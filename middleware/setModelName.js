module.exports = function (modelName) {
  return async (request, response, next) => {
    try {
      request.modelName = modelName;
      next();
    } catch (error) {
      response.status(400).send({
        error: JSON.parse(error.message),
      });
    }
  };
};
