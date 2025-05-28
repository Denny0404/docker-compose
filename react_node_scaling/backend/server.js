const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello from NodeJS Backend!');
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
