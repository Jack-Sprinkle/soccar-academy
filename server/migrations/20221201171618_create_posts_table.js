exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.uuid('id').primary();
        table
            .uuid('user_id')
            .notNullable()
            .references('users.id')
            .onUpdate('CASCADE');
        table.string('category').notNullable();
        table.string('title').notNullable();
        table.string('content').notNullable();
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
