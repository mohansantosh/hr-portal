module.exports = function (sequelize, Sequelize) {
    let EmployeeEmployerPayslip = sequelize.define('EmployeeEmployerPayslip', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        payslipUrl: {
            type: Sequelize.STRING,
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
            tableName: 'employee_employer_payslips',
            underscored: true
        }
    );

    EmployeeEmployerPayslip.associate = function(models) {
        EmployeeEmployerPayslip.belongsTo(models["EmployeeEmploymentHistory"]);
    }
    return EmployeeEmployerPayslip;
}