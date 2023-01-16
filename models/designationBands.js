module.exports = function (sequelize, Sequelize) {
  let DesignationBand = sequelize.define(
    "DesignationBand",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      bandName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      bandInformation: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      tableName: "designation_bands",
      underscored: true,
    }
  );

  DesignationBand.associate = function (models) {
    DesignationBand.hasMany(models["Employee"]);
  };
  return DesignationBand;
};
