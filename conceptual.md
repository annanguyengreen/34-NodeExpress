### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    - Aynchornouse code can be managed with aync/await functions, callback functions, and promises.

- What is a Promise?
  - A promise is a one-time guarantee of a future value.

- What are the differences between an async function and a regular function?
  - Async functions wait for certain components to complete before continuing, whereas regular functions will not wait for code that takes longer and will continue running the rest of the code while the code that takes longer runs in the background. 

- What is the difference between Node.js and Express.js?
  - Node is a javascript environment that runs server-side and is used to build server-side javascript web applications. Express is a framework used in Node similar to Python's Flask framework.

- What is the error-first callback pattern?
  - This pattern is used in Node to promptly handle erros and consistently handle results when using asynchronous code.

- What is middleware?
  - Middleware is code that runs *in-between* requests and responses. It can be used to separate code into more logical groupings and to provide better error handling.

- What does the `next` function do?
  - Next() is used to manually tell the program to move to the next route in your express app. If any argument is passed into next() Express will **always** treat it as an error. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
  - Performance: this code is making three separate GET requests where it could make only one using Promise.all()
  - There is no error handling; should refactor using try/catch
  - The variable names are not very descriptive and could provide more information about what they represent
