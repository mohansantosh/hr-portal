var bcrypt = require("bcrypt");

module.exports = function (sequelize, Sequelize) {
  let User = sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
      tableName: "users",
      underscored: true,
    }
  );
  User.beforeUpdate(function (users, options) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(users.password, salt, null);
    return (users.password = hash);
  });
  User.beforeCreate(function (users, options) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(users.password, salt, null);
    return (users.password = hash);
  });
  User.associate = function (models) {
    User.belongsTo(models["Role"]);
    User.belongsTo(models["Employee"]);
  };
  return User;
};
