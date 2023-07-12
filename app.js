const express = require('express')
const app = express();
const cors=require('cors')

app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.get('/checkversion', (req, res) => {

  console.log('Received data CHECK VER:');
});

app.post('/checkversion', (req, res) => {
  
console.log("HERE ");
  res.send('1' );

})


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
