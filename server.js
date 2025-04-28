const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve the demo.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'demo.html'));
});

// Handle dynamic name input in the URL
app.get('/hello/:name', (req, res) => {
  const userName = req.params.name; // Get the dynamic name from the URL
  res.send(`Hello, ${userName}! Welcome to my Node.js and Express server!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

