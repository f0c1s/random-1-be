const db = require('../db')

const query = (limit, offset) => `
select
    u.id, u.created_at, u.name, count(a.listing_id) as count, array_agg(l.name) as listings
from 
    users u, applications a, listings l
where
    a.user_id = u.id
    and
    a.listing_id = l.id
    and
    a.created_at > Now() - INTERVAL '7 days'
group by
    u.id
order by
    count desc
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
