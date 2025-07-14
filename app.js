const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res.send('<h1>Hello from ECS Fargate!</h1>');
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

