const Proyectos = require('../models/Proyectos');

exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo proyecto'
    });
}

exports.nuevoProyecto = (req, res) => {
    const {nombre} = req.body;
    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agregar un nombre al proyecto'})
    }

    if (errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo proyecto',
            errores
        })
    } else {
        Proyectos.create({nombre})
            .then(() => {
                console.log('Insertado Correctamente')
            })
            .catch(err => {
                console.log(err);
            })
    }
}