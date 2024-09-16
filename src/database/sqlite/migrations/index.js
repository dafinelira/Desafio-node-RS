const sqliteConnection = require('../../sqlite');

const createUsers = require('./createUsers');
const createMovies = require('./createMovies');

async function migrationsRun() {
    const schemas = [
        createUsers, createMovies
    ].join(';\n');
    
    sqliteConnection()
    .then(db=> db.exec(schemas))
    .catch(error => console.error(error));
}

module.exports = migrationsRun;

