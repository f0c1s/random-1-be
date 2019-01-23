const db = require('../db')

const query = (limit = 5, offset = 0) => `
select
    *
from 
    users
limit
    ${limit}
offset
    ${offset}`

function fetch(req, res, next) {
    const limit = req.query.limit || 5
    const page = req.query.page || 1
    const offset = (page - 1) * limit
    db.query(query(limit, offset))
    .then(result => {
        res.send(result)
        next()
    })
    .catch(e => res.end('ERROR!'))
}

module.exports = fetch
