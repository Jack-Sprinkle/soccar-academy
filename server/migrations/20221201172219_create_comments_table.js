exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments('id').primary();
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('post_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('posts')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('content').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
