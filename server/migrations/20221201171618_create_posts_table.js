exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.uuid('id').primary();
        table
            .uuid('user_id')
            .references('users.id')
            .notNullable()
            .onDelete('CASCADE');
        table.string('category').notNullable();
        table.string('title').notNullable();
        table.string('content').notNullable();
        table.timestamp('created_on').notNullable().defaultTo(knex.fn.now())
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
