const knex = require('knex')(require('../knexfile'))
require('dotenv').config();

exports.getPosts = async(req, resp) => {
    try {
        const postsData = await knex('posts')
            .join('users', 'posts.user_id', '=', 'users.id' )
            .where({category: req.params.category})
            .select(
                'posts.id', 
                'posts.title', 
                'posts.content', 
                'posts.created_on',
                'users.user_name'   
            )

        resp.status(200).json(postsData)
    } catch(error) {
        resp.status(400).send(`Error retreiving posts for ${req.params.category} ${error}`)
    }
}