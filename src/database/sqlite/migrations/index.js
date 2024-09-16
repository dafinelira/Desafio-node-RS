const sqliteConnection = require('../../sqlite');
const createMovies = require('./createMovies');

const createUsers = require('./createUsers');

async function migrationsRun() {
    const schemas = [
        createUsers, createMovies
    ].join('');
    
    sqliteConnection()
    .then(db=> db.exec(schemas))
    .catch(error => console.error(error));
}

module.exports = migrationsRun;

