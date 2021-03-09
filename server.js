const express = require("express");
const app = express();
const server = require('http').Server(app);
const path = require("path");
const cors = require("cors");
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

const whitelist = ["http://localhost:3000"];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  corsOptions = { origin: true };
  callback(null, corsOptions);
};


app.use(express.static(__dirname+'/www'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/www/index.html'));
});

app.use(cors(corsOptionsDelegate));

server.listen(PORT, function () {
  console.log(`Server has been started on port ${PORT}`);
});

io.on('connection', function (socket) {
  console.log("Se ha conectado un cliente");
  socket.on('message', function (msg){
    console.log("mensaje recibido:",msg);
    io.emit('message',msg);
  });
});

