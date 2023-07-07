const express = require('express');
const path = require('path');
const api_routes = require('./routes/apiRoutes');
const html_routes = require('./routes/htmlRoutes');


// setting the Server PORT location
const app = express();
const PORT = process.env.PORT || 3001;



// Express Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(api_routes);
app.use(html_routes);


// Listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);