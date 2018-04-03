//create a canvas
//draw elements
//animate elements

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log("test");

var cd = canvas.getContext('2d');
// cd.fillStyle = "tomato";
// // leftRight upDown Width Height
// cd.fillRect(10,10,30,40);
// cd.fillStyle= "blue";
// cd.fillRect(100,100,30,40);
// cd.fillStyle="orange";
// cd.fillRect(50,50,30,40);

//line
// cd.beginPath();
// cd.moveTo(10,15);
// cd.lineTo(300, 300);
// cd.moveTo(500,60); //new point. take this out to not have this
// cd.lineTo(250, 250);
// //always end line with a stroke;
// cd.strokeStyle = "green";
// cd.stroke();

//circle
// cd.arc(x,y,radius, start angle, end angle, draw counterclockwise);
// cd.beginPath();
// cd.arc(100, 100, 40, 0, Math.PI*2, false);
// cd.stroke();
// cd.beginPath();
// cd.arc(80, 100, 40, 0, Math.PI*2, false);
// cd.stroke();
// cd.beginPath();
// cd.arc(200, 100, 40, 0, Math.PI*2, false);
// cd.stroke();


//to animate
// for(var i = 0; i< 50; i++){
//   var x =Math.random() * window.innerWidth;
// var y = Math.random()* window.innerHeight;
// cd.beginPath();
// cd.arc(x,y, 40, 0, Math.PI*2, false);
// // cd.fillStyle="green";
// cd.stroke();
// cd.fill();
//   cd.fillStyle="blue";
// }

//animation goes here
var x = Math.random()*window.innerWidth;
var y = Math.random()*window.innerHeight;
var radius = 30;
// //velocity = dx
var dx = Math.random();
var dy = Math.random();

// function animation(){
//   requestAnimationFrame(animation);
//   for(var i=0; i<10; i++){
//     cd.clearRect(0,0, innerWidth, innerHeight);
//     cd.beginPath();
// cd.arc(x, y, radius, 0, Math.PI*2, false);
// // cd.fillStyle="green";
// cd.stroke();
//     if(x + radius > innerWidth || x - radius < 0){
//       dx = -dx; //negates where it comes from
//     }
//     if(y + radius >innerHeight || y - radius < 0){
//       dy = -dy;
//     }
//     x += dx;
//     y += dy;
//   // cd.fillStyle="blue";
//   // cd.fill();
// }
// }
// animation();



//other animation goes here
function Circle(){
  this.x = x;
this.y = y;
this.dx = dx;
this.dy = dy;
  this.radius = radius;
  this.draw = function(){
    cd.beginPath();
    cd.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    cd.stroke();
  }

  this.update = function(){
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx; //negates where it comes from
    }
    if(this.y + this.radius >innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
    // mainCircle.update();
  }
}
var arry =[];
for(var i =0; i<100; i++){
  radius= Math.random() *100;
  var x = Math.random()*window.innerWidth;
   var y = Math.random()*window.innerHeight;
  //cheat way to use math. rndom for + or - numbers.
  dx=(Math.random() - 0.5)*3;
  dy=(Math.random() - 0.5)*3;
  arry.push(new Circle(x, y, dx, dy, radius));
}


var mainCircle = new Circle(100, 100, 40, 3, 3);

function animation(){
  requestAnimationFrame(animation);
    cd.clearRect(0,0, innerWidth, innerHeight);
  for (var i=0; i< arry.length; i++){
    arry[i].update();
  }

    // cd.beginPath();
    // mainCircle.draw();

// cd.arc(x, y, radius, 0, Math.PI*2, false);
// cd.fillStyle="green";
// cd.stroke();
//     if(x + radius > innerWidth || x - radius < 0){
//       dx = -dx; //negates where it comes from
//     }
//     if(y + radius >innerHeight || y - radius < 0){
//       dy = -dy;
//     }
//     x += dx;
//     y += dy;
  // cd.fillStyle="blue";
  // cd.fill();
}
animation();

function getRandomColor(){
  var letters = '0123456789ABCDEF';
  var color ='#';
  for (var i=0; i<6; i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}
