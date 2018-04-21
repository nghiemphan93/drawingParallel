// Setting up var
var express = require("express");
var app = express();



var socket = require("socket.io");
var io = socket(server);

const port = process.env.PORT || 4200;


// Listening to event connection
io.sockets.on("connection", function(socket){
  // console.log(socket);
  console.log(socket.id);


  //Catch data from client
  socket.on("mouse", function(data){

    //Send back data to all clients
    socket.broadcast.emit("mouse", data);
    console.log(`${socket.id} + ${data}`);
  });
});



// Import folders
app.use(express.static("public"));


// Routing
app.get("/", function(req, res){
  res.send("/index.html");
});


// Starting server
var server = app.listen(port, function(){
  console.log(`Server started at port ${port}...`);
});


