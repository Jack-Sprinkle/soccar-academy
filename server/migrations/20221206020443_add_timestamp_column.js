
exports.up = function(knex) {
    return knex.schema
        .table('posts', (table) => {
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
        })
        .table('comments', (table) => {
            table.timestamp('created_on').notNullable().defaultTo(knex.fn.now());
        })
        
};

exports.down = function(knex) {
    return knex.schema
        .table('users', (table) => {
        table.dropColumn('created_on').defaultTo(knex.fn.now());
        })
        .table('posts', (table) => {
        table.dropColumn('created_on').defaultTo(knex.fn.now());
        })
        .table('comments', (table) => {
        table.dropColumn('created_on').defaultTo(knex.fn.now());
        })
};
