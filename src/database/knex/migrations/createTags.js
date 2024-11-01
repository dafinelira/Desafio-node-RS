exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.text("name").notNulllabe();

    table.interger("note_id").references("id").inTable("createMovies").onDelete("CASCADE");
    table.increments("user_id");
   
});

exports.down = function(knex) {
  
};
