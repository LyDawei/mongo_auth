const express = require('express');
const bodyParser = require('body-parser');
const InitiateMongoServer = require('./db');
const user = require('./routes/user');
require('dotenv').config();

InitiateMongoServer();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use('/user', user);

app.get('/', (req, res) => res.json({ message: 'API Working' }));

app.listen(PORT, (req, res) => {
  console.log(`Server started at port: ${PORT}`);
});
