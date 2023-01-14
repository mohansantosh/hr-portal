module.exports = function (sequelize, Sequelize) {
    let ClientProject = sequelize.define('ClientProject', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        projectCode: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        projectTitle: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        projectDescription: {
            type: Sequelize.STRING,
            allowNull: false
        },
        startDate: {
            type: Sequelize.DATE,
        },
        endDate: {
            type: Sequelize.DATE,
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            default: true
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
        }
    },
        {
            freezeTableName: true,
            tableName: 'client_projects',
            underscored: true
        }
    );

    ClientProject.associate = function(models) {
        ClientProject.belongsTo(models["Client"]);
        ClientProject.hasMany(models["EmployeeProject"]);
        ClientProject.belongsTo(models["GeoLocation"]);
    }
    return ClientProject;
}