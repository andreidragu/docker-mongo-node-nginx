'use strict'

const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'backend'
});

const dbOptions = {
    url: process.env.MONGO_URI,
    settings: {
        poolSize: 10
    },
    decorate: true
};

const init = async () => {
    await server.register({
        plugin: require('hapi-mongodb'),
        options: dbOptions
    });
    await server.register(require('./plugins/endpoints'));

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();