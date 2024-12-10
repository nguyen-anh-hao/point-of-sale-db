/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('menu_items').del()
  await knex('menu_items').insert([
    { id: 1, name: 'Americano', sell_price: 100, capital_price: 50, category_id: 1 },
    { id: 2, name: 'Cappuccino', sell_price: 120, capital_price: 60, category_id: 1 },
    { id: 3, name: 'Latte', sell_price: 150, capital_price: 75, category_id: 1 },
    { id: 4, name: 'Flan', sell_price: 200, capital_price: 100, category_id: 2 },
  ]);
};
