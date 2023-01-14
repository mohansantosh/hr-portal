module.exports = function (sequelize, Sequelize) {
    let Client = sequelize.define('Client', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        clientName: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        clientInformation: {
            type: Sequelize.STRING,
        },
        clientCode: {
            type: Sequelize.STRING,
            unique: true,
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
            tableName: 'clients',
            underscored: true
        }
    );

    Client.associate = function(models) {
        Client.hasMany(models["ClientProject"])
    }
    return Client;
}