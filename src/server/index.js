// Empty Object 
let projectData = {};

let path = require('path');
const mockAPIResponse = require('./mockAPI.js')

// Create express environment: 
const express = require('express');
const app = express();

// Create body parser 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create cors 
const cors = require('cors');
app.use(cors());

// directory where the server will run on:
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

// Construct a port and test server: 
const port = 8081;

app.listen(port, () => {
    console.log(`Running on localhost: ${port}`);
});

// Test MockAPI 
app.get('/test', (req, res) => {
    res.send(mockAPIResponse);
});

// Create a GET route:

// Create a POST route: