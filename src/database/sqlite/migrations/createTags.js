const createTags = `
    CREATE TABLE IF NOT EXISTS tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    movie_note_id INTEGER REFERENCES movie_notes(id) ON DELETE CASCADE,      
    user_id INTEGER REFERENCES users(id), 
    name_note VARCHAR,
    )`;


module.exports = createTags;