const knex = require('knex')(require('../knexfile'));
const {uuid} = require('uuidv4');

exports.getComments = async(req, resp) => {
    try {
        const comments = await knex('comments')
            .select('content', 'created_on', 'user_id', 'id')
            .where({post_id: req.params.postId})
        resp.status(200).json(comments)
    } catch (error) {
        resp.status(400).send(`Error retreiving Comments for ${req.params.postId} ${error}`)
    }
}