/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    await knex('employee').insert([
        { fullname: 'Manager', username: 'manager', password: 'manager', phone_number: '0987654321', gender: 'Male', address: 'Linh Trung', dob: '1999-06-06', role: 'Manager' },
        { fullname: 'Cashier', username: 'cashier', password: 'cashier', phone_number: '0123456789', gender: 'Female', address: 'Nguyen Van Cu', dob: '2004-07-22', role: 'Cashier' },
        { fullname: 'John Doe', username: 'johndoe1', password: 'password1', phone_number: '1234567890', gender: 'Male', address: '123 Elm St', dob: '1990-05-10', role: 'Manager' },
        { fullname: 'Jane Smith', username: 'janesmith', password: 'password2', phone_number: '0987654321', gender: 'Female', address: '456 Oak St', dob: '1985-11-23', role: 'Staff' },
        { fullname: 'Robert Brown', username: 'robertbrown', password: 'password3', phone_number: '1112223333', gender: 'Male', address: '789 Pine St', dob: '1992-02-14', role: 'Staff' },
        { fullname: 'Emily Davis', username: 'emilydavis', password: 'password4', phone_number: '2223334444', gender: 'Female', address: '321 Maple St', dob: '1988-07-30', role: 'Supervisor' },
        { fullname: 'Michael Wilson', username: 'michaelwilson', password: 'password5', phone_number: '3334445555', gender: 'Male', address: '654 Birch St', dob: '1995-12-01', role: 'Staff' },
        { fullname: 'Sarah Johnson', username: 'sarahjohnson', password: 'password6', phone_number: '4445556666', gender: 'Female', address: '987 Cedar St', dob: '1993-03-22', role: 'Cashier' },
        { fullname: 'William Martinez', username: 'williammartinez', password: 'password7', phone_number: '5556667777', gender: 'Male', address: '123 Spruce St', dob: '1987-08-15', role: 'Staff' },
        { fullname: 'Jessica Garcia', username: 'jessicagarcia', password: 'password8', phone_number: '6667778888', gender: 'Female', address: '456 Fir St', dob: '1991-09-05', role: 'Staff' },
        { fullname: 'David Rodriguez', username: 'davidrodriguez', password: 'password9', phone_number: '7778889999', gender: 'Male', address: '789 Redwood St', dob: '1989-10-20', role: 'Supervisor' },
        { fullname: 'Laura Martinez', username: 'lauramartinez', password: 'password10', phone_number: '8889990000', gender: 'Female', address: '321 Cypress St', dob: '1994-11-11', role: 'Cashier' },
        { fullname: 'James Anderson', username: 'jamesanderson', password: 'password11', phone_number: '9990001111', gender: 'Male', address: '654 Willow St', dob: '1990-12-25', role: 'Manager' },
        { fullname: 'Patricia Thomas', username: 'patriciathomas', password: 'password12', phone_number: '0001112222', gender: 'Female', address: '987 Poplar St', dob: '1986-01-30', role: 'Staff' },
        { fullname: 'Christopher Jackson', username: 'christopherjackson', password: 'password13', phone_number: '1112223334', gender: 'Male', address: '123 Ash St', dob: '1992-02-28', role: 'Staff' },
        { fullname: 'Linda White', username: 'lindawhite', password: 'password14', phone_number: '2223334445', gender: 'Female', address: '456 Beech St', dob: '1988-03-15', role: 'Supervisor' },
        { fullname: 'Daniel Harris', username: 'danielharris', password: 'password15', phone_number: '3334445556', gender: 'Male', address: '789 Hickory St', dob: '1995-04-10', role: 'Staff' },
        { fullname: 'Barbara Clark', username: 'barbaraclark', password: 'password16', phone_number: '4445556667', gender: 'Female', address: '321 Walnut St', dob: '1993-05-25', role: 'Cashier' },
        { fullname: 'Matthew Lewis', username: 'matthewlewis', password: 'password17', phone_number: '5556667778', gender: 'Male', address: '654 Chestnut St', dob: '1991-06-30', role: 'Staff' },
        { fullname: 'Elizabeth Robinson', username: 'elizabethrobinson', password: 'password18', phone_number: '6667778889', gender: 'Female', address: '987 Sycamore St', dob: '1989-07-20', role: 'Staff' },
        { fullname: 'Anthony Walker', username: 'anthonywalker', password: 'password19', phone_number: '7778889990', gender: 'Male', address: '123 Dogwood St', dob: '1987-08-10', role: 'Supervisor' },
        { fullname: 'Susan Hall', username: 'susanhall', password: 'password20', phone_number: '8889990001', gender: 'Female', address: '456 Magnolia St', dob: '1994-09-15', role: 'Cashier' }
    ]);
};