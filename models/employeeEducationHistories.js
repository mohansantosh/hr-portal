module.exports = function (sequelize, Sequelize) {
    let EmployeeEducationHistory = sequelize.define('EmployeeEducationHistory', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        specialization: {
            type: Sequelize.STRING,
            allowNull: false
        },
        percentage: {
            type: Sequelize.SMALLINT,
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
            tableName: 'employee_education_histories',
            underscored: true
        }
    );

    EmployeeEducationHistory.associate = function(models) {
        EmployeeEducationHistory.belongsTo(models["EmployeeInfo"]);
        EmployeeEducationHistory.belongsToMany(models["EducationType"], {through: "employee_education_history_types"});
    }
    return EmployeeEducationHistory;
}