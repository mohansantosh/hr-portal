module.exports = function (sequelize, Sequelize) {
  let EmployeeBankDetail = sequelize.define(
    "EmployeeBankDetail",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      bankName: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false,
      },
      accountNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      accountNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ifscCode: {
        type: Sequelize.STRING(11),
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
      tableName: "employee_bank_details",
      underscored: true,
    }
  );

  EmployeeBankDetail.associate = function (models) {
    EmployeeBankDetail.belongsTo(models["EmployeeInfo"]);
  };
  return EmployeeBankDetail;
};
