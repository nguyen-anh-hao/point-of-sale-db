/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.alterTable('order_details', (table) => {
        table.foreign('menu_item_id').references('id').inTable('menu_items');
        table.foreign('order_id').references('id').inTable('orders');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.alterTable('order_details', (table) => {
        table.dropForeign('menu_item_id');
        table.dropForeign('order_id');
    });
};
