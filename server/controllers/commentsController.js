const knex = require('knex')(require('../knexfile'));
const {uuid} = require('uuidv4');

exports.getComments = async(req, resp) => {
    try {
        const comments = await knex('comments')
            .join('users', 'comments.user_id', '=', 'users.id')
            .where({post_id: req.params.postId})
            .select(
                'comments.id',
                'comments.content', 
                'comments.created_on', 
                'users.user_name'
            )
        resp.status(200).json(comments)
    } catch (error) {
        resp.status(400).send(`Error retreiving Comments for ${req.params.postId} ${error}`)
    }
}