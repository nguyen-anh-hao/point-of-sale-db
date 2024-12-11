/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .dropTableIfExists('order_details')
        .createTable('order_details', (table) => {
            table.increments('id').primary();
            table.integer('order_id').unsigned().notNullable();
            table.integer('menu_item_id').unsigned().notNullable();
            table.integer('quantity').unsigned().notNullable();
            table.float('price').unsigned().notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('order_details');
};
