const fs = require( 'fs' );

function leerArchivo(ruta) {
    return fs.readFileSync(ruta, 'utf8');
}

function escribirArchivo(ruta, contenido) {
    fs.writeFileSync( ruta, contenido, 'utf8' );
}

module.exports = {
    leerArchivo,
    escribirArchivo
};


