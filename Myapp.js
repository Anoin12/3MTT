// Myapp.js
const express = require('express');
const app = express();
const port = 3000;

// Simulate a heavy operation with a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js scalable API');
});

// Simulated slow route
app.get('/slow', async (req, res) => {
  await delay(3000); // 3 seconds delay
  res.send('This route simulates a slow operation');
});

// Fast route
app.get('/fast', (req, res) => {
  res.send('This is a fast response!');
});

// JSON response route
app.get('/data', (req, res) => {
  res.json({ status: 'success', message: 'Data received', time: Date.now() });
});

app.listen(port, () => {
  console.log`(`Server running at http:localhost:${port}`);
});