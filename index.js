var express = require('express');
var http = require('http')
var bodyParser = require('body-parser')
const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:3000"
  };
var app = express()
app.use(bodyParser.json())
app.use(express.static("images"));
app.use(cors(corsOptions));

const port = 3000

app.listen(port,()=>{
    console.log(`server started on port: ${port}`)
})