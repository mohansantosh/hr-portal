module.exports = function (sequelize, Sequelize) {
  let Role = sequelize.define(
    "Role",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      roleName: {
        type: Sequelize.STRING,
        unique: true,
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
      tableName: "roles",
      underscored: true,
    }
  );

  Role.associate = function (models) {
    Role.hasMany(models["User"]);
  };
  return Role;
};
