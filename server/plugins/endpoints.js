'use strict';

const dummyData = require('../dummy/dummyFile.json');

const endpoints = {
    name: 'endpoints',
    version: '1.0.0',
    register: async (server, options) => {
        await server.route({
            method: 'GET',
            path: '/checkdb',
            handler: (request, h) => {
                const db = request.mongo.db;
                if (db.serverConfig.isConnected()) {
                    // db.close();
                    return h.response().code(200);
                } else {
                    return h.response().code(204);
                }
            }
        });

        await server.route({
            method: 'POST',
            path: '/dummy',
            handler: (request, h) => {
                return dummyData;
            }
        });

        /*await server.route({
            method: 'GET',
            path: '/testdb/{name}',
            handler: async (request, h) => {
                const db = request.mongo.db;
                console.log("Connected to " + db.databaseName);
                try {
                    return await db.collection('users').findOne({ name: "Andrei" });
                } catch (err) {
                    throw err;
                }
            }
        });*/
    }
};

module.exports = endpoints;