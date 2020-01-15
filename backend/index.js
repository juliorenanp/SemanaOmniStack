// disponibilizando o express.
const express = require('express');

//iniciando o projeto
const app = express();

// Requisição do front e a resposta do back.
app.get('/' , (request, response) => {
    return response.json({
        message: "Hello Kenpachi"
    });
});

app.listen(3333);


// instalado node
// instalado chocolatey
// instalado nodemon yarn add nodemon -D

