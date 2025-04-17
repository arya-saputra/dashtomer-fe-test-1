const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 7020;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

http.listen(port, () => {
  console.log(`BigKing server running at http://localhost:${port}/`);
});
