/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('menu_item_discount', function (table) {
      table.increments('id').primary(); // Primary key 'id'
      table.integer('menu_item_id').unsigned().notNullable()
        .references('id').inTable('menu_items').onDelete('CASCADE'); // Foreign key referencing 'menu_items'
      table.integer('discount_id').unsigned().notNullable()
        .references('id').inTable('discounts').onDelete('CASCADE'); // Foreign key referencing 'discounts'
      table.timestamps(true, true); // 'created_at' and 'updated_at'
  
      // Add a unique constraint on 'menu_item_id' to ensure no duplicate menu items
      table.unique('menu_item_id'); // Enforces that each menu_item_id can only appear once
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('menu_item_discount'); // Drop the table on rollback
  };
  