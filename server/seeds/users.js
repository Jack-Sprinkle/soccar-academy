const userData = require('../seed_data/users_data');

exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert(userData)
};
