const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.get('/api', (req, res) => {
  res.sendFile(__dirname + '/User.json')
});

let listener = app.listen(8080, ()=>{
  console.log("server is running on port" + process.env.PORT)
});




