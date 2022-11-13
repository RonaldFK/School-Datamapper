require('dotenv').config();

const express = require('express');
const server = express();
const router = require('./app/router.js')

const PORT = process.env.PORT
server.set('view engine', 'ejs');
server.set('views', './app/views');
server.use(express.static('./app/public'));
server.use(router);



server.listen(PORT,() => {console.log(`server started on port : ${PORT}`)})