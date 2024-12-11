/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  const imageHelper = require('../utils/getImageAsBase64');
  await knex('menu_items').del();
  await knex('menu_items').insert([
    { name: 'Latte', sell_price: 15000, capital_price: 12000, category_id: 1, quantity: 10, image: imageHelper.getImageAsBase64('../images/menu-items/latte.png') },
    { name: 'Flan', sell_price: 20000, capital_price: 17000, category_id: 2, quantity: 100, image: imageHelper.getImageAsBase64('../images/menu-items/flan.png') },
    { name: 'Cappuccino', sell_price: 21000, capital_price: 16000, category_id: 1, quantity: 20, image: imageHelper.getImageAsBase64('../images/menu-items/cappuccino.png') },
    { name: 'Tiramisu', sell_price: 25000, capital_price: 20000, category_id: 2, quantity: 50, image: imageHelper.getImageAsBase64('../images/menu-items/tiramisu.png') },
    { name: 'Mocha', sell_price: 13000, capital_price: 10000, category_id: 1, quantity: 30, image: imageHelper.getImageAsBase64('../images/menu-items/mocha.png') },
    { name: 'Chocolate Cake', sell_price: 15000, capital_price: 7500, category_id: 2, quantity: 40, image: imageHelper.getImageAsBase64('../images/menu-items/chocolate_cake.png') },
    { name: 'Americano', sell_price: 16000, capital_price: 13000, category_id: 1, quantity: 50, image: imageHelper.getImageAsBase64('../images/menu-items/americano.png') },
    { name: 'Espresso', sell_price: 50000, capital_price: 44000, category_id: 1, quantity: 70, image: imageHelper.getImageAsBase64('../images/menu-items/espresso.png') },
    { name: 'Glace', sell_price: 16000, capital_price: 10000, category_id: 2, quantity: 80, image: imageHelper.getImageAsBase64('../images/menu-items/glace.png') },
  ]);
};