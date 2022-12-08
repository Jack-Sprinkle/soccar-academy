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
            .orderBy('comments.created_on', 'desc')
            
        resp.status(200).json(comments)
    } catch (error) {
        resp.status(400).send(`Error retreiving Comments for ${req.params.postId} ${error}`)
    }
}

exports.newComment = async(req, resp) => {
    try {
        if(
            !req.body.user_id ||
            !req.body.content
        ) {
            return resp.status(400).send(`Please fill out all required fields`)
        }

        const newComment = req.body
        newComment.id = uuid()
        newComment.post_id = req.params.postId
        
        await knex('comments')
            .insert(newComment)
        resp.status(201).send(`New comment successfully created`)

    } catch(error) {
        resp.status(400).send(`Error creating new comment ${error}`)
    }
}