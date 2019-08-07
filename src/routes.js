/*
* @author Felipe ferraresi github felipe1181 
* Routes server
*/
const express = require('express');
const developerController = require('./Controllers/developerController');

const routes = express.Router();

//REQUISITION'S ON SERVER

//CREATE NEW DEVELOPER
routes.post('/developer',developerController.store);

module.exports = routes;