/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .dropTableIfExists('categories')    // Xóa bảng 'categories' nếu tồn tại
        .createTable('categories', function (table) {
        table.increments('id').primary();           // Tạo cột 'id' làm primary key
        table.string('name').unique().notNullable();         // Tạo cột 'name' và không cho phép giá trị null
        table.timestamps(true, true);               // Tạo các cột 'created_at' và 'updated_at'
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('categories');   // Xóa bảng 'categories' nếu rollback  
};