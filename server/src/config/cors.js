module.exports = (request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*');
    response.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}
