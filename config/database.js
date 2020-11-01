module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', process.env.REACT_APP_DATABASE_PORT),
        database: env('DATABASE_NAME', process.env.REACT_APP_DATABASE_NAME),
        username: env('DATABASE_USERNAME', process.env.REACT_APP_DATABASE_USERNAME),
        password: env('DATABASE_PASSWORD', process.env.REACT_APP_DATABASE_PASSWORD),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
