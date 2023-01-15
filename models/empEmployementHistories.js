module.exports = function (sequelize, Sequelize) {
    let EmployeeEmploymentHistory = sequelize.define('EmployeeEmploymentHistory', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        employeeName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        startDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        endDate: {
            type: Sequelize.DATE,
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
            tableName: 'employee_employement_histories',
            underscored: true
        }
    );

    EmployeeEmploymentHistory.associate = function(models) {
        EmployeeEmploymentHistory.belongsTo(models["EmployeeInfo"]);
        EmployeeEmploymentHistory.hasMany(models["EmployeeEmployerPayslip"])
    }
    return EmployeeEmploymentHistory;
}