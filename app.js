const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const apiRouter = require('./routes/apiRouter').router;

app.use('/api/', apiRouter);

module.exports = app;