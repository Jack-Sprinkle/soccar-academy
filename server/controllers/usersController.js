const knex = require('knex')(require('../knexfile'))
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authorize = require('../middleware/authorize');

exports.register = async(req, resp) => {
    const {
        user_name, 
        user_email, 
        user_password, 
        epic_id, 
        discord_name, 
        mmr_standard, 
        user_bio, 
        user_coach
    } = req.body;

    if (
        !user_name ||
        !user_email ||
        !user_password ||
        !epic_id ||
        !discord_name ||
        !mmr_standard ||
        !user_coach
    ) {
        return resp.status(400).send("Please enter the required fields.")
    }

    const hashedPassword = bcrypt.hashSync(user_password);
    const newUser = {
        user_name, 
        user_email, 
        user_password: hashedPassword, 
        epic_id, 
        discord_name, 
        mmr_standard, 
        user_bio, 
        user_coach
    }

    try {
        await knex('users').insert(newUser);
        resp.status(201).send("Registered successfully")
    } catch (error) {
        resp.status(400).send("Failed to register")
    }
}

exports.login = async(req, resp) => {
    
}

exports.current = authorize, async(req, resp) => {
    
}