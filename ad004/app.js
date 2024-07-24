const archivos = require( './archivos.js' );

const ruta = 'archivo.txt';
const contenido = 'Este es el contenido del archivo';

archivos.escribirArchivo( ruta, contenido );
const contenidoLeido = archivos.leerArchivo( ruta );

console.log( contenidoLeido );

// Compare this snippet from ad004/archivos.js:

