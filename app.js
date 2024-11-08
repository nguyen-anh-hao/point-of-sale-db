const express = require('express');
const knex = require('knex')(require('./knexfile').development);

const app = express();
app.use(express.json());

app.get('/menu_items', async (req, res) => {
    try {
        const users = await knex('menu_items').select('*');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});