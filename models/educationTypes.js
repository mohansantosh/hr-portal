module.exports = function (sequelize, Sequelize) {
    let EducationType = sequelize.define('EducationType', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        educationType: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            tableName: 'education_types',
            underscored: true
        }
    );

    EducationType.associate = function(models) {
        EducationType.belongsToMany(models["EmployeeEducationHistory"], {through: "employee_education_history_types"});
    }
    return EducationType;
}