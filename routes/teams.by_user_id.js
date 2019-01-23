const db = require('../db')

const query = (userId, limit = 5, offset = 0) => `
select
    *
from 
    teams
where
    user_id = ${userId}
limit
    ${limit}
offset
    ${offset}`

function fetch(req, res, next) {
    const limit = req.query.limit || 5
    const page = req.query.page || 1
    const offset = (page - 1) * limit
    const userId = req.params.userId
    console.log(req.params, req.query)
    db.query(query(userId, limit, offset))
        .then(result => {
            res.send(result)
            next()
        })
        .catch(e => res.end('ERROR!'))
}

module.exports = fetch
