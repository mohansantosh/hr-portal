module.exports = function (sequelize, Sequelize) {
  let ClientBusinessType = sequelize.define(
    "ClientBusinessType",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      businessType: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      businessInformation: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      tableName: "client_business_types",
      underscored: true,
    }
  );

  ClientBusinessType.associate = function (models) {
    ClientBusinessType.hasMany(models["Client"]);
  };
  return ClientBusinessType;
};
