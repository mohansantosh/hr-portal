module.exports = function (sequelize, Sequelize) {
    let EmployeeHiringRound = sequelize.define('EmployeeHiringRound', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        interviewRound: {
            type: Sequelize.TINYINT,
            allowNull: false
        },
        feedback: {
            type: Sequelize.ENUM('selected', 'rejected', 'hold'),
            allowNull: false
        },
        interviewUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },
        comments: {
            type: Sequelize.STRING
        },
        interviewDate: {
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
            tableName: 'employee_hiring_rounds',
            underscored: true
        }
    );

    EmployeeHiringRound.associate = function(models) {
        EmployeeHiringRound.belongsTo(models["EmployeeHiring"]);
        EmployeeHiringRound.belongsTo(models["Employee"], {
            foreignKey: "interviewerEmployeeId"
        });
    }
    return EmployeeHiringRound;
}