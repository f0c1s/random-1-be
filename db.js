const config = require('./config/db.json')
const pgp = require('pg-promise')()

const connectionString = `postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`
const db = pgp(connectionString)

module.exports = db
