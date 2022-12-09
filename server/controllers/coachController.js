const knex = require('knex')(require('../knexfile'))
require('dotenv').config();


exports.getCoaches = async(req, resp) => {
    try {
        const coachData = await knex('users')
            .select('user_name', 'discord_name', 'mmr_standard', 'user_bio', 'user_coach', 'id')
            .where({user_coach: 'yes'});
        resp.status(200).json(coachData)
    } catch (error) {
        resp.status(400).send(`Error retreiving coaches ${error}`)
    }
}