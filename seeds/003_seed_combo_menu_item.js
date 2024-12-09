/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  const { getImageAsBase64 } = require('../utils/getImageAsBase64');

  // Clear existing data
  await knex('combo_items').del();
  await knex('combo_menu_items').del();

  // Insert combo menu items with images
  const comboMenuItems = await knex('combo_menu_items').insert([
    {
      name: 'Coffee Lovers Combo',
      combo_price: 18.99,
      description: 'Espresso, Latte, and Cappuccino',
      image: getImageAsBase64('../images/menu-items/coffee-combo.jpg'), // Path to the image
    },
    {
      name: 'Dessert Delight Combo',
      combo_price: 29.99,
      description: 'Flan, Cheesecake, and Cannoli',
      image: getImageAsBase64('../images/menu-items/dessert-combo.jpg'), // Path to the image
    },
  ]).returning('id')

  const coffeeComboId = comboMenuItems[0].id;
  const dessertComboId = comboMenuItems[1].id;

  // Insert items in each combo
  await knex('combo_items').insert([
    { combo_id: coffeeComboId, menu_item_id: 1, quantity: 1 }, // Latte
    { combo_id: coffeeComboId, menu_item_id: 3, quantity: 1 }, // Cappuccino
    { combo_id: coffeeComboId, menu_item_id: 9, quantity: 1 }, // Espresso

    { combo_id: dessertComboId, menu_item_id: 2, quantity: 1 }, // Flan
    { combo_id: dessertComboId, menu_item_id: 6, quantity: 1 }, // Cheesecake
    { combo_id: dessertComboId, menu_item_id: 4, quantity: 1 }, 
  ]);
};
