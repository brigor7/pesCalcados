exports.up = function (knex) {
  return knex.schema.createTable('childrens', function (table) {
    table.increments();
    table.string('nome').notNullable;
    table.string('sobrenome').notNullable;
    table.date('nascimento').notNullable;
    table.string('nomeResponsavel').Nullable;
    table.string('avatar').Nullable;
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('childrens');
};
