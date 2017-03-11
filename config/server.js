// Express é um framework que realiza uma interface entre nossos scripts e o node
var express = require('express');
var app = express();

// Definindo que o engine de view do express é o EJS
app.set('view engine', 'ejs');

// Folder padrão das views
app.set('views', './app/views')

module.exports = app;