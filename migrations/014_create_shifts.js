/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('shifts', function (table) {
        table.date('_day').notNullable(); // Ngày
        table.integer('shift').notNullable().checkBetween([1, 4]); // Ràng buộc ca làm từ 1 đến 4
        table.string('employees_username', 255); // Tên đăng nhập của nhân viên
        table.primary(['_day', 'shift']); // Khóa chính gồm cả ngày và ca làm
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('shifts');
};