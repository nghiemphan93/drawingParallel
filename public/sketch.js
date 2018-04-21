function setup(){
  createCanvas(600, 400);
  background(51);

  // Setup socket
  socket = io.connect("https://floating-woodland-33184.herokuapp.com/");

  // Catch data from server
  socket.on("mouse", newDrawing);
}

// Draw Data receiving from server
function newDrawing(data){
  noStroke();
  fill(255);
  ellipse(data.x, data.y, 36, 36);
};


function mouseDragged(){
  // Event mouse dragged to be sent to server
  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit("mouse", data);

  // console.log("Sending " + mouseX + ", " + mouseY);

  // Drawing on my browser
  console.log(`Sending ${mouseX} ${mouseY}`)
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 36, 36);
}

function draw(){
  
}




