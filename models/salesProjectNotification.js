module.exports = function (sequelize, Sequelize) {
    let SalesProjectNotification = sequelize.define('SalesProjectNotification', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        notificationTitle: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM('open', 'close')
        },
        yearsOfExperience: {
            type: Sequelize.TINYINT,
        },
        employeeCount: {
            type: Sequelize.TINYINT,
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
            tableName: 'sales_project_notifications',
            underscored: true
        }
    );

    SalesProjectNotification.associate = function(models) {
        SalesProjectNotification.hasOne(models["ClientProject"]);
        SalesProjectNotification.belongsTo(models["Client"]);
        SalesProjectNotification.belongsTo(models["GeoLocation"]);
        SalesProjectNotification.hasMany(models["EmployeeHiring"]);
    }
    return SalesProjectNotification;
}