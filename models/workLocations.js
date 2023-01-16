"use strict";
module.exports = function (sequelize, Sequelize) {
  let WorkLocation = sequelize.define(
    "WorkLocation",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      pincode: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING(10),
        unique: true,
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
      tableName: "work_locations",
      underscored: true,
    }
  );

  WorkLocation.associate = function (models) {
    WorkLocation.hasMany(models.Employee);
  };
  return WorkLocation;
};
