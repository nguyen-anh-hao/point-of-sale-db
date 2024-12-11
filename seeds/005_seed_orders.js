/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('orders').insert([
    { id: 1, total_price: 300, employee_id: 1, phone_number: '0123456789', note: 'Nhiều đường' },
    { id: 2, total_price: 700, employee_id: 2, phone_number: '0987654321', note: 'Ít đường' },
    { id: 3, total_price: 500, employee_id: 1, phone_number: '0246813579', note: 'Không đường' },
  ]);
};
