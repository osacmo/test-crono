const { DataTypes } = require('sequelize');
const { copy_db } = require('../database/db');

const DatosCopy = copy_db.define('datos', {
    idRFID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    fecha_hora: {
        type: "DATETIME",
        allowNull: false
    },
    zona: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false,
});


module.exports = DatosCopy;
