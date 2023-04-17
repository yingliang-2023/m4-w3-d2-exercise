'use strict';

const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());


app.get('/', (req, res) => {
    console.log('rout\'/\'called!')
    res.send({res:"Sending 200 as response"});
});

app.listen(3000)
console.log('listening on port 3000');