const express = require('express');
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.status(200).send(`
    <html>
      <head>
        <title>Impressive Node.js App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            text-align: center;
            padding: 100px;
          }
          h1 {
            color: #333;
            font-size: 36px;
            margin-bottom: 20px;
          }
          p {
            color: #666;
            font-size: 18px;
          }
          .cta-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            font-size: 18px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            text-decoration: none;
          }
          .cta-button:hover {
            background-color: #0056b3;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to Our Impressive Node.js App!</h1>
        <p>Your journey towards innovation begins here.</p>
        <a href="/about" class="cta-button">Learn More</a>
      </body>
    </html>
  `);
});

// Define a route for the "About" page
app.get('/about', (req, res) => {
  res.status(200).send(`
    <html>
      <head>
        <title>About Us</title>
      </head>
      <body>
        <h1>About Us</h1>
        <p>We are a team of dedicated developers crafting revolutionary Node.js applications.</p>
        <p>Join us in transforming the digital landscape!</p>
        <a href="/" class="cta-button">Back to Home</a>
      </body>
    </html>
  `);
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
