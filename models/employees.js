
module.exports = function (sequelize, Sequelize) {
    let Employee = sequelize.define('Employee', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        employeeCode: {
            type: Sequelize.STRING(10),
            unique: true,
            allowNull: false
        },
        totalExperience: {
            type: Sequelize.SMALLINT,
            defaultValue: 0
        },
        workEmail: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        personalPhoneNumber: {
            type: Sequelize.STRING(10),
            unique: true,
            allowNull: false
        },
        systemAllocated: {
            type: Sequelize.BOOLEAN,
            default: true
        },
        companyPhoneNumber: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        billingStatus: {
            type: Sequelize.ENUM('in_billing', 'bench', 'yta_project'),
            default: 'yta_project'
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
            tableName: 'employees',
            underscored: true
        }
    );

    Employee.associate = function(models) {
        Employee.hasOne(models["User"]);
        //self referencing
        Employee.hasOne(models["Employee"], {
            foreignKey: 'managerId'
        });
        Employee.belongsTo(models["Designation"]);
        Employee.belongsTo(models["WorkLocation"]);
        Employee.hasOne(models["EmployeeInfo"]);
        Employee.hasMany(models["EmployeeProject"]);
    }
    return Employee;
}