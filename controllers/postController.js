const connection = require('../data/db.js')
const { connect } = require('../routers/postsRouters')

function index(req, res) {
    const sql = 'SELECT * FROM posts'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        res.json(results)
    })
}

function show(req, res) {
    const id = req.params.id
    const postSql = `
        SELECT * 
        FROM posts 
        WHERE id = ?
        `

    const tagsSql = `
        SELECT I.*
        FROM tags AS I
        JOIN post_tag AS IP ON I.id = IP.tag_id
        WHERE IP.post_id = ?
        `

    connection.query(postSql, [id], (err, postResults) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        if (postResults.length === 0) return res.status(404).json({ error: 'Post not found' })

        const post = postResults[0]

        connection.query(tagsSql, [id], (err, tagsResults) => {
            if (err) return res.status(500).json({ error: 'Database query failed' })

            post.tags = tagsResults
            res.json(post)
        })
    })
}

function store(req, res) {

}

function update(req, res) {

}

function modify(req, res) {

}

function destroy(req, res) {
    const { id } = req.params

    connection.query('DELETE FROM posts WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete post' })
        res.sendStatus(204)
    })
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}