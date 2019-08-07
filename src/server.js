/*
* @author Felipe ferraresi github felipe1181 
* Main server
*/

//CREATE SERVER
const express = require('express');
const server = express();
//IMPORT ROUTES
const routes = require('./routes');

//LISTEN ROUTES
server.use(routes);

//SERVER OPEN PORT
server.listen(3333);
