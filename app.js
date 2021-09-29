

let canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
//draw items on screen
let winner = false;
let headerText = `Now playing...`

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const player1 = {
    xPos: innerWidth/50,
    yPos: 390,
    height: 35,
    width: 130,
    score: 0
    

}

const player2 = {
    xPos: innerWidth - 70,
    yPos: 390,
    height: 35,
    width: 130,
    score: 0
    

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
    player1.xPos = innerWidth/50;
    player1.yPos = 390;
    player1.height = 35;
    player1.width = 130;
    
    
    player2.xPos = innerWidth - 70;
    player2.yPos = 390;
    player2.height =  35;
    player2.width = 130;
    

    ball.xPos = innerWidth/2;
    ball.yPos = innerHeight/2;
    ball.radius = 30;
    ball.color = 'black';
    ball.dx = (Math.random() - 0.5 )* 15; //xvelocity
    ball.dy = (Math.random() - 0.5 )* 15; //yVelocity
    ball.radius = 30;

    
    
}




function render(){
    
    c.fillRect(player1.xPos,player1.yPos,player1.height,player1.width);
    c.fillRect(player2.xPos,player2.yPos,player2.height,player2.width);

    

    c.font = '30px Arial';
    c.fillText(`Score: ${player1.score}`  , 50, 30);
    c.fillText(`Score: ${player2.score}`, 1390, 30);
    c.fillText(headerText, innerWidth/4 -50, 100);
}




function movePaddle(e){
    switch(e.keyCode) {
        case 38: //arrow up
           
            
            if(player1.yPos === innerHeight){
                break;
            }
            player2.yPos -= 40;
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
    
    render();

    c.beginPath();
    c.arc(ball.xPos, ball.yPos,30, 0, Math.PI * 2,false);
    c.fillStyle = 'black';
    c.fill();
    c.stroke();

    if(winner === false){
        if(ball.xPos + ball.radius > innerWidth){ //right side (player 2)
            player1.score += 1;
            player1.score === 3 ? winner = true : winner = false;
            initialize();
            
        }else if (ball.xPos - ball.radius < 0) { //left side (player 1)
            player2.score+= 1;
            player1.score === 3 ? winner = true : winner = false;
            initialize();
        }
        
        if(ball.yPos + ball.radius > innerHeight  || ball.yPos - ball.radius < 0){
            ball.dy = -ball.dy;
        }

        ballCollision();
        
        ball.xPos += ball.dx;
        ball.yPos += ball.dy;
  }else if (winner === true){
      if(player1.score === 3){
        headerText = 'Congrats Player 1! You have won the game of pong!!'
      }else if(player2.score === 3){
        headerText = 'Congrats Player 2! You have won the game of pong!!';
      
      }
      
      
  }
    //player1input();
    

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
    if((ballLeft < rightOfPaddle1 && ballRight > leftOfPaddle1 && ballBottom >topOfPaddle1 && ballTop < bottomOfPaddle1) || (ballLeft < rightOfPaddle2 && ballRight > leftOfPaddle2 && ballBottom >topOfPaddle2 && ballTop < bottomOfPaddle2)){
        ball.dx = -ball.dx

    }
}




document.addEventListener('keydown', movePaddle);

// window.addEventListener('resize',resizeCanvas);

// function resizeCanvas(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     animate();
// }