exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.integer('id').primary();
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('category').notNullable();
        table.string('title').notNullable();
        table.string('content').notNullable();
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
