module.exports = function (sequelize, Sequelize) {
  let CompanyDepartment = sequelize.define(
    "CompanyDepartment",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      departmentName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: "company_departments",
      underscored: true,
    }
  );

  CompanyDepartment.associate = function (models) {
    CompanyDepartment.hasMany(models["Employee"]);
  };
  return CompanyDepartment;
};
