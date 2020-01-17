// disponibilizando o express.
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

//iniciando o projeto
const app = express();

//Iniciando o mongoose
mongoose.connect('mongodb+srv://kensei:bleach@cluster0-uyus6.mongodb.net/week10?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true 
});

// utilizando o CORS
app.use(cors());

// Força o express a utilizar o json.
app.use(express.json());

// Utiliza o routes
app.use(routes);


app.listen(3333);