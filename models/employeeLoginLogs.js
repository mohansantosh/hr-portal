module.exports = function (sequelize, Sequelize) {
  let EmployeeLoginLog = sequelize.define(
    "EmployeeLoginLog",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      loginTime: {
        type: Sequelize.DATE,
      },
      logoutTime: {
        type: Sequelize.DATE,
      },
    },
    {
      freezeTableName: true,
      tableName: "employee_login_logs",
      underscored: true,
    }
  );

  EmployeeLoginLog.associate = function (models) {
    EmployeeLoginLog.belongsTo(models["Employee"]);
  };
  return EmployeeLoginLog;
};
