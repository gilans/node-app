const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World Gilberto</h1>')
})

app.listen(3000, () => {
  console.log('listen on port 3000')
})