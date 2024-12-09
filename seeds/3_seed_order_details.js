/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('order_details').del()
  await knex('order_details').insert([
    { id: 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 100 },
    { id: 2, order_id: 1, menu_item_id: 2, quantity: 2, price: 200 },
    { id: 3, order_id: 2, menu_item_id: 1, quantity: 3, price: 300 },
    { id: 4, order_id: 2, menu_item_id: 2, quantity: 4, price: 400 },
    { id: 5, order_id: 3, menu_item_id: 1, quantity: 5, price: 500 },
  ]);
};
