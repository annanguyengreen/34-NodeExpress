# Broken App Issues

- `var app` changed to `const app`

- `app.listen(3000)` changed to:
    `app.listen(3000, function() {
    console.log('App on port 3000');
    });`

- error middleware added: 
    `app.use(function(err, req, res, next) {
    console.log(err);
    res.status(500).send('Internal Server Error');
    })`

- needs .json() express method to access the request body, added line: `app.use(express.json())`

- refactored code into separate files according to middleware logic

- refactored handleRequest code from original to be cleaner and to make logic easier to follow