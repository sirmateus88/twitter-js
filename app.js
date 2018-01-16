const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use(function(req, res, next){
  console.log('Request made at ' + Date());
  console.log('Request Type: ' + req.method);
  console.log('Request Path: ' + req.url);
  next();
});

app.get('/', (req, res) => res.send('Hello World'));

app.get('/news', (req, res) => res.send('News is crazy'));

app.listen(3000, () => console.log('server listening'));

/*
Request is essentially the browser sending a request to that specific URL,

Then the server can send back a response, in this case something like "news is crazy"
*/
