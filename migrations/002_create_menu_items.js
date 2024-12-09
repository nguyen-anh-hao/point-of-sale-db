/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .dropTableIfExists('menu_items')
    .createTable('menu_items', function (table) {
      table.increments('id').primary();           // Tạo cột 'id' làm primary key
      table.string('name').unique().notNullable();         // Tạo cột 'name' và không cho phép giá trị null
      table.decimal('sell_price', 10, 2).notNullable();     // Tạo cột 'sellPrice' và không cho phép giá trị null
      table.decimal('capital_price', 10, 2).notNullable();  // Tạo cột 'capitalPrice' và không cho phép giá trị null
      table.integer('quantity').notNullable();    // Tạo cột 'quantity' và không cho phép giá trị null
      table.binary('image');                  // Tạo cột 'imagePath'
      table.integer('category_id').unsigned().notNullable().references('id').inTable('categories').onDelete('CASCADE'); // Tạo cột 'categoryId' tham chiếu đến bảng 'categories'
      table.timestamps(true, true);               // Tạo các cột 'created_at' và 'updated_at'
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('menu_items');   // Xóa bảng 'menu_items' nếu rollback
};
