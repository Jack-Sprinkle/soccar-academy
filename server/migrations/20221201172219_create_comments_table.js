exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.uuid('id').primary();
        table
            .uuid('user_id')
            .references('users.id')
            .notNullable()
            .onDelete('CASCADE');
        table
            .uuid('post_id')
            .notNullable()
            .references('posts.id')
            .onDelete('CASCADE');
        table.string('content').notNullable();
        table.timestamp('created_on').notNullable().defaultTo(knex.fn.now())
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
