/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const imageHelper = require('../utils/getImageAsBase64');

  await knex('menu_items').insert([
    { name: 'Latte', sell_price: 9.99, capital_price: 4.50, category_id: 1 , quantity: 10, image: imageHelper.getImageAsBase64('../images/menu-items/latte.png')},
    { name: 'Flan', sell_price: 12.99, capital_price: 6.00, category_id: 2 , quantity: 100, image: imageHelper.getImageAsBase64('../images/menu-items/flan.png')},
    { name: 'Cappuccino', sell_price: 7.99, capital_price: 3.50, category_id: 1 , quantity: 20, image: imageHelper.getImageAsBase64('../images/menu-items/cappuccino.png')},
    { name: 'Tiramisu', sell_price: 14.99, capital_price: 7.00, category_id: 2 , quantity: 50, image: imageHelper.getImageAsBase64('../images/menu-items/tiramisu.png')},
    { name: 'Mocha', sell_price: 8.99, capital_price: 4.00, category_id: 1 , quantity: 30, image: imageHelper.getImageAsBase64('../images/menu-items/mocha.png')},
    { name: 'Chocolate Cake', sell_price: 15.99, capital_price: 7.50, category_id: 2 , quantity : 40, image: imageHelper.getImageAsBase64('../images/menu-items/chocolate_cake.png')},
    { name: 'Americano', sell_price: 6.99, capital_price: 3.00, category_id: 1 , quantity: 50, image: imageHelper.getImageAsBase64('../images/menu-items/americano.png')},
    { name: 'Espresso', sell_price: 5.99, capital_price: 2.50, category_id: 1 , quantity: 70, image: imageHelper.getImageAsBase64('../images/menu-items/espresso.png')},
    { name: 'Glace', sell_price: 16.99, capital_price: 8.00, category_id: 2 , quantity: 80, image: imageHelper.getImageAsBase64('../images/menu-items/glace.png')},
  ]);
};