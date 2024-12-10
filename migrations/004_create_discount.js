/** 
 * @param { import("knex").Knex } knex  
 * @returns { Promise<void> } 
 */
exports.up = function(knex) {   
    return knex.schema     
      .dropTableIfExists('discounts')     
      .createTable('discounts', function (table) {       
        table.increments('id').primary(); // Tạo cột 'id' làm primary key       
        table.string('name').unique().notNullable(); // Tạo cột 'name' và không cho phép giá trị null       
        table.string('description'); // Tạo cột 'description'       
        table.decimal('percentage', 5, 2).notNullable()  // Tạo cột 'percentage' và không cho phép giá trị null      
        table.boolean('is_disabled').defaultTo(false); // Tạo cột 'disabled' và mặc định là false       
        table.date('start_date').notNullable(); // Tạo cột 'start_date' và không cho phép giá trị null       
        table.date('end_date').notNullable(); // Tạo cột 'end_date' và không cho phép giá trị null       
        table.timestamps(true, true); // Tạo các cột 'created_at' và 'updated_at'     
      }); 
  };
  
  /** 
   * @param { import("knex").Knex } knex  
   * @returns { Promise<void> } 
   */
  exports.down = function(knex) {   
    return knex.schema.dropTable('discounts'); // Xóa bảng 'discounts' nếu rollback 
  };
  