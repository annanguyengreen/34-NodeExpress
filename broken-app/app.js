/* import dependencies */
const express = require('express');
const app = express();

/* route middleware */
const handleRequest = require('./handleRequest')

/* import Morgan for error handling */
const morgan = require('morgan')
app.use(morgan('dev'))

app.use(express.json());
app.use('/', handleRequest);


// general error handler
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).send('Internal Server Error');
})

// start server 
app.listen(3000, function() {
  console.log('App running on port 3000');
});

module.exports = app;