var env = require('../env.config');

console.log('Servidor corriendo en el puerto: ' + env.PUERTO);

const enviroment = `Estamos en modo: ${process.env.NODE_ENV}. En el entorno de ${env.ENTORNO}`;
document.write(enviroment);
