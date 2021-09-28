

let canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
//draw items on screen
const xCenter = canvas.width/2;
const yCenter = canvas.height/2;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const player1 = {
    xPos: 50,
    yPos: 390,
    height: 35,
    width: 130,
    score: 0,
    velocity: 10

}

const player2 = {
    xPos: 1470,
    yPos: 390,
    height: 35,
    width: 130,
    score: 0,
    velocity: 10

}

const ball = {
    xPos: 600,
    yPos: 500,
    radius: 30,
    color: 'black',
    dx: (Math.random() - 0.5 )* 15, //xvelocity
    dy: (Math.random() - 0.5 )* 15, //yVelocity
    radius : 30
}












//drawCircle(xCenter,yCenter,30,'black');

initialize();
function initialize(){
    player1.yPos = 390;
    player2.yPos = 390;

    
    
}



// var ball = new ballF(xCenter, yCenter);
// ballF.draw();
function render(){
    
    c.fillRect(player1.xPos,player1.yPos,player1.height,player1.width);
    c.fillRect(player2.xPos,player2.yPos,player2.height,player2.width);

    

    c.font = '30px Arial';
    c.fillText(`Score: ${player1.score}`  , 50, 30);
    c.fillText(`Score: ${player2.score}`, 1390, 30);
}



// const player1input = () => {
   
//     if(38 in keys){
//         console.log('hi');
//         player1.yPos -= player1.velocity;
//     }
//     if(40 in keys){
//         player1.yPos += player1.velocity;
//     }
    
// }
function movePaddle(e){
    switch(e.keyCode) {
        case 38: //arrow up
           
            player2.yPos -= 40;
            if(player1.yPos === innerHeight){
                break;
            }
             //move up
            break;
        case 40: //arrow down
            player2.yPos += 40;
            console.log('stuffdown');//move down
            break;
        case 87: //w key
            player1.yPos -= 40;
            console.log('stuffupw');//move up
            break;
        case 83: // s key
            player1.yPos += 40;
            console.log('stuffdowns')//move down
            break;
    }
    e.preventDefault();
    
    

    
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0 , innerWidth, innerHeight);

    c.beginPath();
    c.arc(ball.xPos, ball.yPos,30, 0, Math.PI * 2,false);
    c.fillStyle = 'black';
    c.fill();
    c.stroke();

   
    if(ball.xPos + ball.radius > innerWidth || ball.xPos - ball.radius < 0){
        ball.dx = -ball.dx;
    }
    
    if(ball.yPos + ball.radius > innerHeight  || ball.yPos - ball.radius < 0){
        ball.dy = -ball.dy;
    }

    ballCollision();
    
    ball.xPos += ball.dx;
    ball.yPos += ball.dy;

    //player1input();
    render();

}

animate();








function ballCollision(){
   //grabbing all sides of the paddle for player1
   let topOfPaddle1 = player1.yPos;
   let bottomOfPaddle1 = player1.yPos + player1.height;
   let leftOfPaddle1 = player1.xPos;
   let rightOfPaddle1 = player1.xPos + player1.width/4;
   
   //grabbing all sides of the paddle for player2
   let topOfPaddle2 = player2.yPos;
   let bottomOfPaddle2 = player2.yPos + player2.height;
   let leftOfPaddle2 = player2.xPos;
   let rightOfPaddle2 = player2.xPos + player2.width/4;
   
   //grabbing all sides of the ball
   let ballTop = ball.yPos - ball.radius;
   let ballBottom = ball.yPos + ball.radius;
   let ballLeft = ball.xPos - ball.radius;
   let ballRight = ball.xPos + ball.radius;

   //if there is a collison on any side of the paddle with the ball
   
    if(ballLeft < rightOfPaddle1 || ballRight > leftOfPaddle2 ){
        ball.dx = -ball.dx;
   }
}

document.addEventListener('keydown', movePaddle);

