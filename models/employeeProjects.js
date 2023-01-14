module.exports = function (sequelize, Sequelize) {
    let EmployeeProject = sequelize.define('EmployeeProject', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
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
            tableName: 'employee_projects',
            underscored: true
        }
    );

    EmployeeProject.associate = function(models) {
        EmployeeProject.belongsTo(models["ClientProject"]);
        EmployeeProject.belongsTo(models["Employee"]);
    }
    return EmployeeProject;
}