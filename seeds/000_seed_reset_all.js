/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL
    if (await knex.schema.hasTable('employee')) {
        await knex('employee').del();
    }
    if (await knex.schema.hasTable('order_details')) {
        await knex('order_details').del();
    }
    if (await knex.schema.hasTable('orders')) {
        await knex('orders').del();
    }
    if (await knex.schema.hasTable('discounts')) {
        await knex('discounts').del();
    }
    if (await knex.schema.hasTable('combo_menu_item')) {
        await knex('combo_menu_item').del();
    }
    if (await knex.schema.hasTable('menu_items')) {
        await knex('menu_items').del();
    }
    if (await knex.schema.hasTable('categories')) {
        await knex('categories').del();
    }
};
