const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // This will throw an error if the condition is false, the error will not be caught
    if (Math.random() < 0.5) {
      throw new Error('Something went wrong!');
    }
    res.send('Hello, world!');
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));