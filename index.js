var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost/booksdb');

var Book = require('./models/bookModel');

var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', function (req, res) {
    res.send('welcome to api');
});

app.listen(port, function () {
    console.log('listening')
});