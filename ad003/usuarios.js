const saludar = require("../ad001/saludo");

class Usuario {
    constructor(nombre, apellido, email, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido}, mi correo es ${this.email} y mi contraseña es ${this.password}`;
    }

}


module.exports = Usuario;
// module.exports = {
//     Usuario,
