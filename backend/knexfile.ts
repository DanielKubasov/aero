module.exports = {
    client: 'postgres',
    connection: {
        name: 'Database connection',
        host: 'localhost',
        user: 'postgres',
        port: 5432,
        password: 'root',
        database: 'aero',
    },
    migrations: {
        directory: './migrations',
    },
};
