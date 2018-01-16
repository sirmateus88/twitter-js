const express = require( 'express' );
const bodyParser = require('body-parser');
const nunjucks = require( 'nunjucks' );
const app = express(); // creates an instance of an express application
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests


app.use('/', routes);
app.use(express.static('public'));

nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use(function(req, res, next){
  console.log('Request made at ' + Date());
  console.log('Request Type: ' + req.method);
  console.log('Request Path: ' + req.url);
  next();
});

app.get('/*', (req, res) => (res.sendFile(__dirname + req.url)));

app.listen(3000, () => console.log('server listening'));

/*
Request is essentially the browser sending a request to that specific URL,

Then the server can send back a response, in this case something like "news is crazy"
*/
