'use strict';

const
    modelName = 'Credit';

module.exports = (/**Sequelize*/sequelize, DataTypes)=> {
    /**@typedef {{}} Client*/
    return sequelize.define(modelName, {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        client_id: {
            type: DataTypes.UUID,
            allowNull: false,
            field: 'client_id'
        },
        approved: {
            field: 'approved',
            type: Boolean,
            allowNull: false,
            defaultValue: false
        },
        bid: {
            field: 'bid',
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        }
    }, {
        underscored: true,
        tableName: 'credits',
        classMethods: {
            associate: function (models) {
                this.belongsTo(models['Client'], {as: 'Client', foreignKey: 'client_id'});
            }
        }
    })
};