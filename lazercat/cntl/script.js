const NOOP = 0;
const LASER_ON = 1;
const LASER_OFF = 2;
const LASER_LEFT = 3;
const LASER_RIGHT = 4;
const LASER_LEFT_MAX = 5;
const LASER_RIGHT_MAX = 6;

function left () {}
function right() {}

var num_of_clicksz=0;

  var z = document.getElementById("left");
  z.addEventListener("click", () => {
  let text = document.getElementById("text")
  text.innerHTML = "left clicked";
  num_of_clicksz=num_of_clicksz+1;

  socket.send(JSON.stringify(LASER_LEFT));
})


var num_of_clicks=0;
var y = document.getElementById("right");
y.addEventListener("click", () => {
  text.innerHTML = "right clicked";
  num_of_clicks=num_of_clicks+1;
  socket.send(JSON.stringify(LASER_RIGHT))
})

function powerbutton() {
  var x = document.getElementById("power")
  if (x.innerHTML === "On") {
    x.innerHTML = "Off";
    socket.send(JSON.stringify(LASER_OFF))
  } else {
    x.innerHTML = "On";
    socket.send(JSON.stringify(LASER_ON))
  }
}


function on_close(event) {
  console.log("close")
}

let curr_state = [1, 1]; // left, right

function on_message(event) {
  obj = JSON.parse(event.data)
  if (obj.command === "log") {
    console.log(obj.data)
  }
  else if (obj.command === "stop") {
    if (obj.data === LEFT) {
      /* Make left button red */
    } 
    else if (obj.data === RIGHT) {
      /* Make right button red */
    }
  }
}



const socket = new WebSocket("ws://localhost:8001")

socket.onopen = () => {
  console.log("open")
}
socket.onmessage = on_message
socket.addEventListener("close", on_close)

//  changing left right button color to red 
