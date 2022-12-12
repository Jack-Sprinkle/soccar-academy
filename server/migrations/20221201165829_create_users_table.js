exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.uuid('id').primary();
        table.string('user_name').notNullable().unique();
        table.string('user_email').notNullable().unique();
        table.string('user_password').notNullable();
        table.string('epic_id').notNullable();
        table.string('discord_name').notNullable();
        table.integer('mmr_standard').notNullable().unsigned();
        table.string('user_bio');
        table.string('user_coach').notNullable();
        table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
    });
};


exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
