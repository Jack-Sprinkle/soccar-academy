const knex = require('knex')(require('../knexfile'));
const {uuid} = require('uuidv4');

exports.getMMR = async(req, resp) => {
    try {
        const userMMR = await knex('mmr')
            .select('mmr_standard', 'updated_at')
            .where({user_id: req.params.userId})
        
        resp.status(200).json(userMMR)
    } catch(error) {
        resp.status(400).send(`Error retreiving Match Making Rank ${error}`)
    }
}

exports.updateMMR = async(req, resp) => {
    try {
        if(!req.body.mmr_standard) {
            return resp.status(400).send(`Please make sure to provide updated MMR`)
        }

        const updatedMMR = req.body
        updatedMMR.id = uuid()

        await knex('mmr')
            .insert(updatedMMR)
        resp.status(201).send(`new MMR record successfully created`)
    
        
    } catch(error) {
        resp.status(400).send(`Error creating new MMR record ${error}`)
    }
}