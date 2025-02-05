import type {Knex} from 'knex';

export async function up(knex: Knex): Promise<void> {
    // Users table
    await knex.schema.createTable('users', t => {
        t.increments('id').primary();
        t.text('username').notNullable().unique().index();
        t.text('password').notNullable().defaultTo('');
        t.text('email').notNullable().unique().index();
        t.text('first_name').notNullable().defaultTo('');
        t.text('last_name').notNullable().defaultTo('');
        t.timestamps(true, true);
    });

    // Spaces table
    await knex.schema.createTable('spaces', t => {
        t.increments('id').primary();
        t.integer('owner_id').references('id').inTable('users');
        t.string('name').nullable();
        t.text('description').nullable();
        t.timestamps(true, true);
    });

    // Projects table
    await knex.schema.createTable('projects', t => {
        t.increments('id').primary();
        t.integer('space_id').references('id').inTable('spaces');
        t.string('name').nullable();
        t.text('description').nullable();
        t.timestamps(true, true);
    });

    // Priorities table
    await knex.schema.createTable('priorities', t => {
        t.increments('id').primary();
        t.string('name').nullable();
        t.text('description').nullable();
        t.timestamps(true, true);
    });

    // Statuses table
    await knex.schema.createTable('statuses', t => {
        t.increments('id').primary();
        t.string('name').nullable();
        t.text('description').nullable();
        t.timestamps(true, true);
    });

    // Tasks table
    await knex.schema.createTable('tasks', t => {
        t.increments('id').primary();
        t.integer('project_id').references('id').inTable('projects');
        t.integer('priority_id').references('id').inTable('priorities');
        t.integer('status_id').references('id').inTable('statuses');
        t.string('name').nullable();
        t.text('description').nullable();
        t.timestamps(true, true);
    });

    // Roles table
    await knex.schema.createTable('roles', t => {
        t.increments('id').primary();
        t.integer('space_id').references('id').inTable('spaces');
        t.string('name').nullable();
        t.text('description').nullable();
        t.timestamps(true, true);
    });

    // Permissions table
    await knex.schema.createTable('permissions', t => {
        t.increments('id').primary();
        t.integer('role_id').references('id').inTable('roles');
        t.timestamps(true, true);
    });

    /* Many-to-many tables */

    // Users to roles table
    await knex.schema.createTable('user_roles', t => {
        t.integer('user_id').primary().references('id').inTable('users');
        t.integer('role_id').primary().references('id').inTable('roles');
    });

    // Users to spaces table
    await knex.schema.createTable('user_spaces', t => {
        t.integer('user_id').primary().references('id').inTable('users');
        t.integer('space_id').primary().references('id').inTable('spaces');
    });

    // Users to tasks table
    await knex.schema.createTable('user_tasks', t => {
        t.integer('user_id').primary().references('id').inTable('users');
        t.integer('task_id').primary().references('id').inTable('tasks');
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users');
    await knex.schema.dropTable('roles');
    await knex.schema.dropTable('permissions');
    await knex.schema.dropTable('spaces');
    await knex.schema.dropTable('projects');
    await knex.schema.dropTable('tasks');
    await knex.schema.dropTable('statuses');
    await knex.schema.dropTable('priorities');
    await knex.schema.dropTable('user_roles');
    await knex.schema.dropTable('user_spaces');
    await knex.schema.dropTable('user_tasks');
}
