/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .dropTableIfExists('combo_menu_items')
      .createTable('combo_menu_items', function (table) {
        table.increments('id').primary(); // Primary key
        table.string('name').unique().notNullable(); // Combo name
        table.decimal('combo_price', 10, 2).notNullable(); // Price for the combo
        table.string('description'); // Optional description of the combo
        table.binary('image'); // Image of the combo
        table.integer('quantity').notNullable(); // Quantity of the item in the combo
        table.timestamps(true, true); // Timestamps
  
        // Reference to individual items in the combo
        // Many-to-many relationship implemented in a separate table
      })
        .then(() => knex.schema
        .dropTableIfExists('combo_items')
      .createTable('combo_items', function (table) {
        table.increments('id').primary(); // Primary key
        table.integer('combo_id').unsigned().notNullable().references('id').inTable('combo_menu_items').onDelete('CASCADE'); // Combo ID
        table.integer('menu_item_id').unsigned().notNullable().references('id').inTable('menu_items').onDelete('CASCADE'); // Menu item ID
      }));
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema
      .dropTable('combo_items') // Drop the combo_items table first due to foreign key constraints
      .dropTable('combo_menu_items'); // Then drop the combo_menu_items table
  };
  