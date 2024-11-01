exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary(); // Cria o id como INTEGER PRIMARY KEY AUTOINCREMENT
      table.string('name'); // Cria a coluna name como VARCHAR
      table.string('email').unique(); // Cria a coluna email como VARCHAR com restrição de unicidade
      table.string('password'); // Cria a coluna password como VARCHAR
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Cria a coluna created_at com o valor padrão do timestamp atual
      table.timestamp('updated_at').defaultTo(knex.fn.now()); // Cria a coluna updated_at com o valor padrão do timestamp atual
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users'); // Função para reverter a migração, removendo a tabela users
  };
