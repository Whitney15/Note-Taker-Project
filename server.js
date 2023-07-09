const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// setting the Server PORT location
const app = express();
const PORT = process.env.PORT || 4001;



// Express Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Listening
app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT} 🚀`)
);


