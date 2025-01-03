/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('orders').insert([
    { id: 1, total_price: 30000, employee_id: 1, grand_total: 30000, phone_number: '0123456789', note: 'Nhiều đường' },
    { id: 2, total_price: 70000, employee_id: 2, grand_total: 70000, phone_number: '0987654321', note: 'Ít đường' },
    { id: 3, total_price: 50000, employee_id: 1, grand_total: 50000, phone_number: '0246813579', note: 'Không đường' },
  ]);
};
