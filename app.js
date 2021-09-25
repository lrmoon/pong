


let canvas = document.querySelector('canvas');

//draw items on screen
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const xCenter = canvas.width/2;
const yCenter = canvas.height/2;


let paddle1 = c.fillRect(50,390,35,130);
let paddle2 = c.fillRect(1330,390,35,130);

c.beginPath();
let ball = c.arc(xCenter, yCenter,30, 0, Math.PI * 2,false);
c.fillStyle = 'black';
c.stroke();

c.font = '30px Arial';
c.fillText('pong', xCenter, 30);



function movePaddle(){

}


