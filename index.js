const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();

// Carpeta "public"
app.use(express.static('public'));

// Habilitar PUG
app.set('view engine', 'pug');

// Crear carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

app.listen(3000);