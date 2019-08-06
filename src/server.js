/*
* @author Felipe ferraresi github felipe1181 
* Main server
*/

//CREATE SERVER
const express = require('express');
const server = express();

//GET REQUISITION'S
server.get('/',(req,res)=>{
    res.send('server start');
});

//SERVER OPEN PORT
server.listen(3333);
