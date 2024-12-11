/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .dropTableIfExists('orders')
        .createTable('orders', (table) => {
            table.increments('id').primary();
            table.integer('total_price').unsigned().notNullable();
            table.decimal('percentage', 5, 2).unsigned();
            table.decimal('grand_total', 10, 2).unsigned().notNullable();
            table.integer('employee_id').unsigned().notNullable();
            table.string('note').defaultTo('');
            table.string('phone_number');
            table.timestamp('created_at').defaultTo(knex.fn.now());
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('orders');
};
