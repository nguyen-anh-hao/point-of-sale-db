/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('order_details').insert([
    { id: 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 10000 },
    { id: 2, order_id: 1, menu_item_id: 2, quantity: 2, price: 20000 },
    { id: 3, order_id: 2, menu_item_id: 1, quantity: 3, price: 30000 },
    { id: 4, order_id: 2, menu_item_id: 2, quantity: 4, price: 40000 },
    { id: 5, order_id: 3, menu_item_id: 1, quantity: 5, price: 50000 },
  ]);
};