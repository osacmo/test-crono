const cron = require('node-cron');
const { QueryTypes } = require('sequelize');
const { db } = require('./database/db');
const { v4: uuidv4 } = require('uuid');
const Datos = require('./models/datos');
const DatosCopy = require('./models/datos_copy');

const Server = require('./models/server');
const server = new Server();
server.listen();

cron.schedule('*/2 * * * * *', () => {
    console.clear();
    console.log("\n****USER CREATED****\n");
    createUser();
});

cron.schedule('*/10 * * * * *', () => {
    console.clear();
    getTriggers().then((result) => {

        const data = result.map(el => el.dataValues);
        DatosCopy.bulkCreate(data);
        console.log("\n****Datos copiados****\n");

        db.query("TRUNCATE TABLE datos_AFTER_INSERT");

    }).catch((err) => {
        console.log(err);
    });
});


const createUser = async () => {
    const zona = generateRandomInteger(6);
    const n_user = await db
        .query(`INSERT INTO datos(idRFID, zona) VALUES('${uuidv4()}','${zona}') `,
            { type: QueryTypes.INSERT });
    return n_user;
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

const getTriggers = async () => {
    const results = await Datos.findAll();
    return results
}
