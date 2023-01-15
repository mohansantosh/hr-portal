module.exports = function (sequelize, Sequelize) {
  let SkillType = sequelize.define(
    "SkillType",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      skillName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: "skill_types",
      underscored: true,
    }
  );

  SkillType.associate = function (models) {
    SkillType.belongsToMany(models["ClientProject"], {
      through: "client_project_skills",
    });
    SkillType.belongsToMany(models["Employee"], { through: "employee_skills" });
  };
  return SkillType;
};
