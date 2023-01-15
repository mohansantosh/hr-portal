module.exports = function (sequelize, Sequelize) {
    let EmployeeHiring = sequelize.define('EmployeeHiring', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        recruitmentMode: {
            type: Sequelize.ENUM('offline', 'online'),
            allowNull: false
        },
        phoneNumber: {
            type: Sequelize.STRING(10),
            unique: true,
            allowNull: false            
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
            tableName: 'employees_hiring',
            underscored: true
        }
    );

    EmployeeHiring.associate = function(models) {
        EmployeeHiring.hasOne(models["Employee"]);
        EmployeeHiring.belongsTo(models["EmployeeHiringSource"]);
        EmployeeHiring.hasMany(models["EmployeeHiringRound"]);
        EmployeeHiring.belongsTo(models["SalesProjectNotification"]);
    }
    return EmployeeHiring;
}