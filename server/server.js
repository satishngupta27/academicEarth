const express = require("express");

// cors is used to transfer data between one domain to another, our frontend will communicate with backend api
// express validator: to give error when email is not valid or password
// jsonwebtoken: to generate jsonwebtoken
// morgan: whenever request coming from any route we can see in console

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// using mongodbAtlas
mongoose.connect(process.env.DATABASE_CLOUD,{ useNewUrlParser: true, useUnifiedTopology: true  })
.then( () => console.log('DB connected'))
.catch( (err) => console.log(err))


// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors());
// give client url CLIENT_URL coming from env file
app.use(cors({ origin: process.env.CLIENT_URL }));

// get: receive the request that is coming from client side

// middleware: code that you want to run in middle
// whenever we have request we are forwarding it to authRoutes
app.use('/api', authRoutes);
app.use('/api', userRoutes);


// this will give port 8000 because we have written in env file
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`API is running on port ${port}`));