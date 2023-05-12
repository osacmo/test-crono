const { DataTypes } = require('sequelize');
const { db } = require('../database/db');

const Datos = db.define('datos_AFTER_INSERT', {
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


module.exports = Datos;
