const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-n1cn5.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Entender requisições do tipo JSON
app.use(express.json());
app.use(routes); 
// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query Params: request.query (Filtros, ordenação, paginação, ...) (GET)
// Route Params: request.params (Identificar um recurso na alteração ou remoção) (PUT/DELETE)
// Body: request.body (Dados para criação ou alteração de um registro) (POST/PUT)

// MongoDB (Não-relacional)

app.listen(3333);
