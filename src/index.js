//using express to accept requests

// import express package
const express = require('express');

//specify the port that the app will run on 
const PORT = 4000;

//create new app using express constructor
const app = express();

//simple route to test the app
app.get('/',(req,res)=> res.send('<h1> Hello from Route hi</h1>'));

//make the app listen on the port 4000
app.listen(PORT, ()=> console.log(`App is up & running on port: ${PORT}`));
