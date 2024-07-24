const Usuario = require("./usuarios.js");

const usuario1 = new Usuario("Josefino", "Perez", "jperez@email.com", "123456");
const usuario2 = new Usuario("Preclamcio", "Agurto", "pagur@email.com", "123456");

console.log( usuario1.saludar() );
console.log( usuario2.saludar() );

