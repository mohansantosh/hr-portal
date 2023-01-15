module.exports = function (sequelize, Sequelize) {
    let TechnologyType = sequelize.define('TechnologyType', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        type: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            tableName: 'technology_types',
            underscored: true
        }
    );

    TechnologyType.associate = function(models) {
        TechnologyType.belongsToMany(models["ClientProject"], {through: "client_project_technologies"});
    }
    return TechnologyType;
}