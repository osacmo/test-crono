require('dotenv').config()
const express = require('express')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.APP_PORT || 3002
    }

    listen() {
        this.app.listen(process.env.APP_PORT, () => {
            console.log(`Server listening on port ${this.port}`)
        })
    }
}

module.exports = Server;
