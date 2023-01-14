module.exports = function (sequelize, Sequelize) {
    let GeoLocation = sequelize.define('GeoLocation', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        locationZone: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        workStartTime: {
            type: Sequelize.SMALLINT,
            allowNull: false
        },
        workEndTime: {
            type: Sequelize.SMALLINT,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            tableName: 'geo_locations',
            underscored: true
        }
    );

    GeoLocation.associate = function(models) {
        GeoLocation.hasMany(models["ClientProject"]);
    }
    return GeoLocation;
}