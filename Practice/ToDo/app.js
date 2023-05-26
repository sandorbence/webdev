//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = ['asd', 'asd2', 'asd3'];

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    let date = new Date();
    let today = date.getDay();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    }

    let day = date.toLocaleDateString('en-US', options);

    res.render('list', { day: day, newListItems: items });
});

app.post('/', function (req, res) {
    item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});

app.listen(3000, function () {
    console.log('Server started on port 3000.');
});