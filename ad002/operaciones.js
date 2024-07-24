// operaciones.js

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function producto(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        // return 'No se puede dividir por cero';
        throw new Error('No se puede dividir por cero');
        
    } else {
        return a / b;
    }
}

module.exports = {
    suma,
    resta,
    producto,
    division
};

// Compare this snippet from e003/app.js: