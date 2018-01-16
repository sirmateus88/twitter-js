const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/', (req, res) => res.send('Hello World'));

app.get('/news', (req, res) => res.send('News is crazy'));

app.listen(3000, () => console.log('server listening'));

