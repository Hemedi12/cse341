
const express = require('express');
const app = express();
const mongodb = require('./data/database');
const routes = require('./routes'); // Import your routes
const port = process.env.PORT || 3000;

app.use('/', routes); // Mount your routes

mongodb.initDb((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
    process.exit(1); // Exit the process if database connection fails
  } else {
    app.listen(port, () => {
      console.log(`Database connected and server listening on port ${port}`);
    });
  }
});