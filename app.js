const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the first middleware.');
    next(); //Allows the request to cntinue to the nest middleware in line
});

app.use((req, res, next) => {
    console.log('In the second middleware.');
    res.send('<h1>Hi from express</h1>');
});

app.listen(3000);
