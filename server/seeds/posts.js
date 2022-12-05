const postData = require('../seed_data/posts_data');


exports.seed = async function(knex) {
  await knex('posts').del()
  await knex('posts').insert(postData)
};
