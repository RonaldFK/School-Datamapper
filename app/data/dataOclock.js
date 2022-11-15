// Initialisation de ma connexion à la BDD, puis export de mon module client
const { Client } = require('pg');
const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database:process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGDPASSWD,
});
client.connect();

module.exports = client;