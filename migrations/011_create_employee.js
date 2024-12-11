/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('employee', (table) => {
        table.increments('id').primary();
        table.string('fullname').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('phone_number').notNullable();
        table.string('gender').notNullable();
        table.string('address').notNullable();
        table.date('dob').notNullable();
        table.string('role').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('employee');
};
