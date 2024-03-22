const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const users = [];

app.use(bodyParser.json());

// Register route
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (users.some(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already taken' });
  }


  users.push({ username, password });

  res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
