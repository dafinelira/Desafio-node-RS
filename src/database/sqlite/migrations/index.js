const sqliteConnection = require('../../sqlite');

const createUsers = require('./createUsers');
const createMovies = require('./createMovies');
const createTags = require('./createTags');

async function migrationsRun() {
    const schemas = [
        createUsers, createMovies,createTags
    ].join(';\n');
    
    sqliteConnection()
    .then(db=> db.exec(schemas))
    .catch(error => console.error(error));
}

module.exports = migrationsRun;