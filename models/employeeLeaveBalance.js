module.exports = function (sequelize, Sequelize) {
  let EmployeeLeaveBalance = sequelize.define(
    "EmployeeLeaveBalance",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      leaveBalance: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      validFrom: {
        type: Sequelize.DATE,
      },
      validTo: {
        type: Sequelize.DATE,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
    },
    {
      freezeTableName: true,
      tableName: "employee_leave_balance",
      underscored: true,
    }
  );

  EmployeeLeaveBalance.associate = function (models) {
    EmployeeLeaveBalance.belongsTo(models["LeaveType"]);
    EmployeeLeaveBalance.belongsTo(models["Employee"]);
  };
  return EmployeeLeaveBalance;
};
