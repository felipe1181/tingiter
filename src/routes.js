/*
* @author Felipe ferraresi github felipe1181 
* Routes server
*/
const express = require('express');
const developerController = require('./Controllers/developerController');
const likeController = require('./Controllers/likeController');
const deslikeController = require('./Controllers/deslikeController');

const routes = express.Router();

//REQUISITION'S ON SERVER

//CREATE NEW DEVELOPER
routes.get('/developers',developerController.index);
routes.post('/developers',developerController.store);
routes.post('/developers/:devId/like',likeController.store);
routes.post('/developers/:devId/deslike',deslikeController.store);
module.exports = routes;