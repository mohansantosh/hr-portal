module.exports = function (sequelize, Sequelize) {
    let LeaveType = sequelize.define('LeaveType', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        leaveType: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        defaultLeaveCount: {
            type: Sequelize.TINYINT,
            defaultValue: 0
        },
    },
        {
            freezeTableName: true,
            tableName: 'leave_types',
            underscored: true
        }
    );

    LeaveType.associate = function(models) {
        LeaveType.hasMany(models["EmployeeLeaveBalance"]);
        LeaveType.hasMany(models["EmployeeLeaveApplication"]);
    }
    return LeaveType;
}