module.exports = function (sequelize, Sequelize) {
    let EmployeeHiringSource = sequelize.define('EmployeeHiringSource', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        sourceName: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        sourceDescription: {
            type: Sequelize.STRING,
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
            tableName: 'employee_hiring_sources',
            underscored: true
        }
    );

    EmployeeHiringSource.associate = function(models) {
        EmployeeHiringSource.hasMany(models["EmployeeHiring"]);
    }
    return EmployeeHiringSource;
}