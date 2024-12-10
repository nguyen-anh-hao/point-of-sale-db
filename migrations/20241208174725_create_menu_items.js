/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .dropTableIfExists('menu_items')
        .createTable('menu_items', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.float('sell_price').unsigned().notNullable();
            table.float('capital_price').notNullable();
            table.integer('category_id').unsigned().notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('menu_items');
};
