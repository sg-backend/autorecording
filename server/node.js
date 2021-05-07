    'use strict';

const Hapi = require("@hapi/hapi");
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision')
//const HapiAuthJwt2 = require('hapi-auth-jwt2');
//const jwt = require('jsonwebtoken');
const HapiSwagger = require('hapi-swagger');


const {common_array} = require('../route/common');

const node = async () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 6000,
        routes: {
            cors: true,
          
        }   
    })

    await server.register(Inert);
    await server.register(Vision);
   // await server.register(HapiAuthJwt2);
    await server.register(HapiSwagger);
   

    





    for (const route in common_array) {
        server.route(common_array[route])
    }
   
    
    await server.start();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    return server;

}

module.exports = node;