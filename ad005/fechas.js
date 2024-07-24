function obtenerFechaActual() {
    return new Date().toLocaleDateString();
}

function obtenerHoraActual() {
    return new Date().toLocaleTimeString();
}

module.exports = {
    obtenerFechaActual,
    obtenerHoraActual
};


