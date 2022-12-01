exports.up = function(knex) {
    return knex.schema.createTable('mmr', (table) => {
        table.uuid('id').primary();
        table
            .uuid('user_id')
            .notNullable()
            .references('users.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('mmr_standard').notNullable().unsigned();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('mmr');
};
