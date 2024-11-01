exports.up = function(knex) {
    return knex.schema.createTable('movies', function(table) {
      table.increments('id').primary(); // Cria o id como INTEGER PRIMARY KEY AUTOINCREMENT
      table.string('title'); // Cria a coluna title como VARCHAR
      table.string('description'); // Cria a coluna description como VARCHAR
      table.integer('nota'); // Cria a coluna nota como INTEGER
      table.integer('user_id').unsigned().references('id').inTable('users'); // Cria a coluna user_id como INTEGER que referencia a tabela users
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Cria a coluna created_at com o valor padrão do timestamp atual
      table.timestamp('updated_at').defaultTo(knex.fn.now()); // Cria a coluna updated_at com o valor padrão do timestamp atual
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies'); // Função para reverter a migração, removendo a tabela movies
  };