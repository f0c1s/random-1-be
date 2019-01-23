const topActiveUsers = require('./topActiveUsers')
const users = require('./users')
const userInfo = require('./userInfo')
const companies = require('./companies')
const teams = require('./teams')
const teamsByUserId = require('./teams.by_user_id')
const app = require('../app')
const express = require('express')
const router = express.Router()

function setup(app) {
    app.use('/', router)
    app.use('/userInfo/:userId', userInfo)
    app.use('/users', users)
    app.use('/companies', companies)
    app.use('/teams/user/:userId', teamsByUserId)
    app.use('/teams', teams)
    router.use('/topActiveUsers', topActiveUsers)
}

module.exports = setup
