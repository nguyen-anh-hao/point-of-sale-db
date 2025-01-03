/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('categories').insert([
    { name: 'Café' },
    { name: 'Dessert' },
  ]);
};
