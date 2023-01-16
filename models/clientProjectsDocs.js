module.exports = function (sequelize, Sequelize) {
  let ClientProjectDoc = sequelize.define(
    "ClientProjectDoc",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      docUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      docDescription: {
        type: Sequelize.STRING,
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
      tableName: "client_project_docs",
      underscored: true,
    }
  );

  ClientProjectDoc.associate = function (models) {
    ClientProjectDoc.belongsTo(models["ClientProject"]);
  };
  return ClientProjectDoc;
};
