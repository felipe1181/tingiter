/*
* @author Felipe ferraresi github felipe1181 
* Main server
*/

//CREATE SERVER
const express = require('express');
const mongoose = require('mongoose');
const server = express();

//CONNECT DATABASE
mongoose.connect('mongodb+srv://tingiter:tingiter@1181@cluster0-lccbc.mongodb.net/dbtingiter?retryWrites=true&w=majority', {useNewUrlParser:true});

//IMPORT ROUTES
const routes = require('./routes');

//LISTEN ROUTES
server.use(express.json());
server.use(routes);

//SERVER OPEN PORT
server.listen(3333);
