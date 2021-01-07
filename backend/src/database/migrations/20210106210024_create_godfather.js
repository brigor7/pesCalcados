exports.up = function (knex) {
  return knex.schema.createTable('godfathers', function (table) {
    table.increments();
    table.string('nome').notNullable;
    table.string('sobrenome').notNullable;
    table.string('sexo').notNullable;
    table.string('telefone').notNullable;
    table.string('email').notNullable;
    table.string('password').notNullable;
    table.date('nascimento').Nullable;
    table.string('avatar').Nullable;
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('godfathers');
};
