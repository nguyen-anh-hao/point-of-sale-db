/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('ShiftCheck', function (table) {
        table.date('_day').notNullable();               // Ngày
        table.string('employees_username', 255);        // Tên đăng nhập của nhân viên
        table.time('checkin').notNullable();            // Giờ vào
        table.time('checkout');                         // Giờ ra
        table.string('status', 255);                    // Trạng thái
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('ShiftCheck');
};