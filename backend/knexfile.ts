module.exports = {
    client: 'postgres',
    connection: {
        name: 'Database connection',
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    migrations: {
        directory: './migrations',
    },
};
