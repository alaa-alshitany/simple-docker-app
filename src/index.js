//using express to accept requests

// import express package
const express = require('express');

//import mongoose package
const mongoose = require('mongoose');

//connect to db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI).then(() => console.log('connect to db ...')).catch((err) => console.log('failed to connect',err));

//specify the port that the app will run on 
const PORT = 4000;

//create new app using express constructor
const app = express();

//simple route to test the app
app.get('/',(req,res)=> res.send('<h1> Hello from Route hi</h1>'));

//make the app listen on the port 4000
app.listen(PORT, ()=> console.log(`App is up & running on port: ${PORT}`));
