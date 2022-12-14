const knex = require('knex')(require('../knexfile'))
require('dotenv').config();
const {uuid} = require('uuidv4');

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
            .orderBy('posts.created_on', 'desc')

        resp.status(200).json(postsData)
    } catch(error) {
        resp.status(400).send(`Error retreiving posts for ${req.params.category} ${error}`)
    }
}

exports.getSinglePost = async(req, resp) => {
    try {
        const singlePost = await knex('posts')
            .join('users', 'posts.user_id', '=', 'users.id')
            .where({'posts.id': req.params.postId}).first()
            .select(
                'posts.title', 
                'posts.content',
                'users.user_name',
                'posts.created_on'
            )
        resp.status(201).json(singlePost)
    } catch(error) {
        resp.status(400).send(`Error retreiving post ${error}`)
    }
}

exports.newPost = async(req, resp) => {
    try {
        if(
            !req.body.user_id ||
            !req.body.category ||
            !req.body.title ||
            !req.body.content
        ) {
            return resp.status(400).send(`Please fill out all required fields`)
        }

        const newPost = req.body
        newPost.id = uuid()
        
        await knex('posts')
            .insert(newPost)
        resp.status(201).send(`New post successfully created`)

    } catch(error) {
        resp.status(400).send(`Error creating new post ${error}`)
    }
}