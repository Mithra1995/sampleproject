const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to ECS Project</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(to right, #4facfe, #00f2fe);
          color: #fff;
          text-align: center;
          padding: 50px;
          margin: 0;
        }
        .container {
          background-color: rgba(0, 0, 0, 0.4);
          padding: 40px;
          border-radius: 10px;
          display: inline-block;
        }
        h1 {
          font-size: 3em;
        }
        p {
          font-size: 1.5em;
        }
        a {
          display: inline-block;
          margin-top: 20px;
          text-decoration: none;
          background: #fff;
          color: #333;
          padding: 10px 20px;
          border-radius: 5px;
          transition: 0.3s ease;
        }
        a:hover {
          background: #eee;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Hello from ECS Fargate Project!</h1>
        <p>This Node.js app is deployed using CodePipeline + CodeDeploy + ECS + Fargate</p>
        <a href="https://aws.amazon.com/ecs/" target="_blank">Learn More</a>
      </div>
    </body>
    </html>
  `);
});

// ✅ THIS LINE IS MANDATORY
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
