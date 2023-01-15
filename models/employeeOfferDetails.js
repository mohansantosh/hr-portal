module.exports = function (sequelize, Sequelize) {
    let EmployeeOfferDetail = sequelize.define('EmployeeOfferDetail', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        offerLetterSend: {
            type: Sequelize.BOOLEAN,
            default: false
        },
        offerStatus: {
            type: Sequelize.ENUM('accepted', 'rejected', 'document_allocation')
        },
        hr_discussion: {
            type: Sequelize.BOOLEAN
        },
        currentCtc: {
            type: Sequelize.INTEGER
        },
        expectedCtc: {
            type: Sequelize.INTEGER
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
            tableName: 'employee_offer_details',
            underscored: true
        }
    );

    EmployeeOfferDetail.associate = function(models) {
        EmployeeOfferDetail.belongsTo(models["Employee"]);
    }
    return EmployeeOfferDetail;
}