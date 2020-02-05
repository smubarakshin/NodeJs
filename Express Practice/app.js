const express = require('express');

const app = express(); 

app.use('/users', (req, res, next) => {
    console.log('Well hello!');
    res.send('<h3>This is new user!</h3>');
});

app.use('/', (req, res, next) => {
    console.log('Well hello!');
    res.send('<h3>This is nice!</h3>');
});

app.listen(5000);