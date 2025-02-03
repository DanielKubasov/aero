import type {Knex} from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', t => {
        t.increments('id').primary();
        t.text('email').notNullable().defaultTo('');
        t.text('first_name').notNullable().defaultTo('');
        t.text('last_name').notNullable().defaultTo('');
        t.text('password').notNullable().defaultTo('');
        t.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users');
}
