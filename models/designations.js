module.exports = function (sequelize, Sequelize) {
  let Designation = sequelize.define(
    "Designation",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      designationName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: "designations",
      underscored: true,
    }
  );

  Designation.associate = function (models) {
    Designation.hasMany(models["Employee"]);
  };
  return Designation;
};
