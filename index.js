var express = require('express');
var app = express();
var router = express.Router();

router.use(function(request, response, next){
  console.log("/" + request.method);
  next();
});


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');

router.get('/', function(request, response){
	response.sendFile(__dirname + '/views/pages/index.html');
});

router.get('/about', function(request, response){
  response.sendFile(__dirname + '/views/pages/about.html');
});

router.get('/contact', function(request, response){
  response.sendFile(__dirname + '/views/pages/contact.html');
});

app.use('/', router);

app.use('*', function(request,response){
  response.sendFile(__dirname + '/public/error.html')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});