module.exports = function (sequelize, Sequelize) {
  let EmployeeLeaveApplication = sequelize.define(
    "EmployeeLeaveApplication",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      leaveType: {
        type: Sequelize.ENUM("half_day", "full_day"),
        allowNull: false,
      },
      leaveReason: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      approvalStatus: {
        type: Sequelize.ENUM("rejected", "applied", "approved"),
      },
      leaveFrom: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      leaveTo: {
        type: Sequelize.DATE,
        allowNull: false,
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
      tableName: "employee_leave_applications",
      underscored: true,
    }
  );

  EmployeeLeaveApplication.associate = function (models) {
    EmployeeLeaveApplication.belongsTo(models["Employee"]);
    EmployeeLeaveApplication.belongsTo(models["LeaveType"]);
  };
  return EmployeeLeaveApplication;
};
