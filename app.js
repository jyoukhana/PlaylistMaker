const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/nodeproject');

db = mongoose.connection;

//check connection to db

db.once('open', function () {
  console.log('successfully connected to mongodb')
});

//check for database errors

db.on('error', function (err) {
  console.log(err);
});

//main app
const app = express();

//bring in models folder
let list = require('./models/lists');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home route
app.get('/', function (req, res) {
  list.find({}, function (err, lists) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: "some lists",
        lists: lists
      })
    }
  });
});

//add list route
app.get('/lists/add', function (req, res) {
  res.render('add_list', {
    title: "add lists"
  })
});

//listening on server
app.listen(3000, function () {
  console.log('server started on port 3000')
});