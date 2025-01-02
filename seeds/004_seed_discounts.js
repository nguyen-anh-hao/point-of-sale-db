/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('discounts').insert([
    { name: 'Summer Sale', description: '20% off on all items', percentage: 20.00, start_date: '2024-12-10', end_date: '2024-06-30' },
    { name: 'Winter Sale', description: '15% off on all items', percentage: 15.00, start_date: '2024-12-01', end_date: '2024-12-31' }
  ]);

  await knex('menu_item_discount').insert([
    { menu_item_id: 1, discount_id: 1 },
    { menu_item_id: 2, discount_id: 1 },
    { menu_item_id: 3, discount_id: 2 }
  ]);
};