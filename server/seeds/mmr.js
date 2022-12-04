const mmrData = require('../seed_data/mmr_data');

exports.seed = async function(knex) {
  await knex('mmr').del()
  await knex('mmr').insert(mmrData)
};
