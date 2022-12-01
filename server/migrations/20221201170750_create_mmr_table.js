exports.up = function(knex) {
  return knex.schema.createTable('mmr', (table) => {
        table.increments('id').primary();
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('mmr_standard').notNullable().unsigned();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('mmr');
};
