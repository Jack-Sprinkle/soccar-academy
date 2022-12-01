exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.uuid('id').primary();
        table
            .uuid('user_id')
            .notNullable()
            .references('users.id')
            .onUpdate('CASCADE');
        table
            .uuid('post_id')
            .notNullable()
            .references('posts.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('content').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
