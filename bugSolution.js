const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      if (Math.random() < 0.5) {
        throw new Error('Something went wrong!');
      }
      res.send('Hello, world!');
    } catch (error) {
      next(error); // Pass the error to the error handling middleware
    }
  }, 1000);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));