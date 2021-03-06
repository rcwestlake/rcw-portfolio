const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

//serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
