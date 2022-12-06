const commentsData = require('../seed_data/comments_data')

exports.seed = async function(knex) {
  await knex('comments').del()
  await knex('comments').insert(commentsData)
};
