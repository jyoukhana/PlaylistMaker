const express = require('express');
const path = require('path');

//main app
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home route
app.get('/', function(req, res){
  res.render('index', {
    title: "some lists"
  })
});

//add list route
app.get('/lists/add', function(req, res){
  res.render('add_list', {
    title: "add lists"
  })
});

//listening on server
app.listen(3000, function(){
  console.log('server started on port 3000')
});
