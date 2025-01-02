/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    // add new column (isCombo) to order_details table
    return knex.schema.table('order_details', table => {
        table.boolean('isCombo').defaultTo(false);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    // drop the column (isCombo) from order_details table
    return knex.schema.table('order_details', table => {
        table.dropColumn('isCombo');
    });
};
