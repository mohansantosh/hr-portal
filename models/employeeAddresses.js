module.exports = function (sequelize, Sequelize) {
    let EmployeeAddress = sequelize.define('EmployeeAddress', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        houseNo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        streetName: {
            type: Sequelize.STRING,
            allowNull: false           
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false           
        },
        district: {
            type: Sequelize.STRING,
            allowNull: false      
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false  
        },
        pincode: {
            type: Sequelize.INTEGER,
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
            tableName: 'employee_addresses',
            underscored: true
        }
    );

    EmployeeAddress.associate = function(models) {
        EmployeeAddress.belongsTo(models["EmployeeInfo"]);
    }
    return EmployeeAddress;
}