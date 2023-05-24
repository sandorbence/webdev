//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    let date = new Date();
    let today = date.getDay()
    let day = '';

    if (today === 6 || today === 0) {
        day = "the weekend";
    }
    else {
        day = "a weekday";
    }
    res.render('list', { day: day });
});

app.listen(3000, function () {
    console.log('Server started on port 3000.');
});