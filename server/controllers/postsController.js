const knex = require('knex')(require('../knexfile'))
require('dotenv').config();

exports.getPosts = async(req, resp) => {
    try {
        const postsData = await knex('posts')
            .select('id', 'title', 'content', 'user_id', 'created_on')
            .where({category: req.params.category})

        resp.status(200).json(postsData)
    } catch(error) {
        resp.status(400).send(`Error retreiving posts for ${req.params.category} ${error}`)
    }
}