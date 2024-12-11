/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('employee').del();
    await knex('employee').insert([
        { fullname: 'Jose Murphy', username: 'josemurphy1', password: '1111', phone_number: '1234567890', gender: 'Male', address: '123 Elm St', dob: '1990-05-10', role: 'Manager' },
        { fullname: 'Alice Johnson', username: 'alicej', password: '1234', phone_number: '0987654321', gender: 'Female', address: '456 Oak St', dob: '1985-11-23', role: 'Staff' },
        { fullname: 'Bob Smith', username: 'bobsmith', password: 'abcd', phone_number: '1112223333', gender: 'Male', address: '789 Pine St', dob: '1992-02-14', role: 'Staff' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Carol White', username: 'carolwhite', password: 'qwerty', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'David Brown', username: 'davidb', password: 'xyz123', phone_number: '3334445555', gender: 'Male', address: '654 Birch St', dob: '1995-12-01', role: 'Staff' }
    ]);
};