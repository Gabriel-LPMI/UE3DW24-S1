const dotenv = require('dotenv').config();
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const port = process.env.PORT;
const apiRouter = require('./routes/apiRouter').router;

const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data

// middleware
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/', apiRouter);

app.listen(port, () => {
    console.log ('Server listening on port: ' + port)
});

app.get('/', function (req, res) {
    res.setHeader("Content-Type", 'text/html');
    res.status(200).send('My page');
});