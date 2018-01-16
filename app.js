const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const app = express(); // creates an instance of an express application
const routes = require('./routes');
app.use('/', routes);

const locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};

nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//   console.log(output);
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use(function(req, res, next){
  console.log('Request made at ' + Date());
  console.log('Request Type: ' + req.method);
  console.log('Request Path: ' + req.url);
  next();
});



app.listen(3000, () => console.log('server listening'));

/*
Request is essentially the browser sending a request to that specific URL,

Then the server can send back a response, in this case something like "news is crazy"
*/
