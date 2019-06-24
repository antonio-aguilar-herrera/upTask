const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Conexión base datos
const db = require('./config/db');
require('./models/Proyectos');
db.sync()
    .then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
    console.error('Unable to connect to the database:', err);
    });

const app = express();

// Carpeta "public"
app.use(express.static('public'));

// Habilitar PUG
app.set('view engine', 'pug');

// Body parser
app.use(bodyParser.urlencoded({extended: true}));

// Crear carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

app.listen(3000);