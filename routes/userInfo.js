const db = require('../db')

const queries = userId => [
    `select * from users where id = ${userId}`,
    `select t.contact_user as "isContact", c.id, c.created_at as "createdAt", c.name from teams t, companies c where t.user_id = ${userId} and c.id = t.company_id`,
    `select id, created_at as "createdAt", name, description from listings where created_by = ${userId}`,
    `select a.id, a.created_at as "createdAt", a.cover_letter as "coverLetter", l.id as "listingId", l.name, l.description from applications a, listings l where a.user_id = ${userId} and a.listing_id = l.id`
]

function UserInfo(values) {
    this.id = values[0][0].id,
    this.name = values[0][0].name,
    this.createdAt = values[0][0].created_at
    this.companies = values[1]
    this.createdListings = values[2]
    this.applications = values[3].map(a => ({
        id: a.id,
        createdAt: a.createdAt,
        coverLetter: a.coverLetter,
        listing: {
            id: a.listingId,
            name: a.name,
            description: a.description
        }
    }))
}

function fetch(req, res, next) {
    const userId = req.params.userId
    const results = queries(userId).map(q => db.query(q))
    Promise.all(results)
        .then(values => {
            const info = new UserInfo(values)
            res.send(info)
        })
        .catch(e => console.error('queries failed'))
}

module.exports = fetch
