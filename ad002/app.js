const operaciones = require( './operaciones.js' );

const a = 10;
const b = 5;

console.log( `Suma: ${ operaciones.suma(a, b) }` );
console.log( `Resta: ${ operaciones.resta(a, b) }` );
console.log( `Producto: ${ operaciones.producto(a, b) }` );
console.log( `División: ${ operaciones.division(a, b) }` );

// Compare this snippet from e003/operaciones.js:
// operaciones.js

