// Setting up var
var express = require("express");
var app = express();

// Starting server
var server = app.listen(4200, function(){
  console.log("Server started at port 4200...");
});

var socket = require("socket.io");
var io = socket(server);


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



