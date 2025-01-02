/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const { getImageAsBase64 } = require('../utils/getImageAsBase64');

  // Insert combo menu items with images
  const comboMenuItems = await knex('combo_menu_items').insert([
    {
      name: 'Lovers Combo',
      combo_price: 77000,
      description: 'Latte, Cappuccino, Flan, and Tiramisu',
      image: getImageAsBase64('../images/menu-items/coffee-combo.jpg'), // Path to the image
      quantity: 70,
    },
    {
      name: 'Dessert Delight Combo',
      combo_price: 40000,
      description: 'Mocha, Chocolate Cake, and Glace',
      image: getImageAsBase64('../images/menu-items/dessert-combo.jpg'), // Path to the image
      quantity: 100,
    },
  ]).returning('id')

  const coffeeComboId = comboMenuItems[0].id;
  const dessertComboId = comboMenuItems[1].id;

  await knex('combo_items').del();
  await knex('combo_items').insert([
    { combo_id: coffeeComboId, menu_item_id: 1 }, // Latte
    { combo_id: coffeeComboId, menu_item_id: 3 }, // Cappuccino
    { combo_id: coffeeComboId, menu_item_id: 2 }, // Flan
    { combo_id: coffeeComboId, menu_item_id: 4 }, // Tiramisu

    { combo_id: dessertComboId, menu_item_id: 5 }, // Mocha
    { combo_id: dessertComboId, menu_item_id: 6 }, // Chocolate Cake
    { combo_id: dessertComboId, menu_item_id: 9 }, // Glace
  ]);
};
