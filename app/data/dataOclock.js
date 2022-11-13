// Initialisation de ma connexion à la BDD, puis export de mon module client
const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database:"oclock",
    user: 'adm_oclock',
    password: 'oclock',
});
client.connect();

module.exports = client;