/*
* @author Felipe ferraresi github felipe1181 
* Routes server
*/
const express = require('express');
const routes = express.Router();

//REQUISITION'S ON SERVER

//CREATE NEW DEVELOPER
routes.post('/newdev',(req,res)=>{
    res.json({message:'server start'});
});

module.exports = routes;