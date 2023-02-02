const grid=document.getElementById("grid");
const displayScore=document.querySelector("#score")
//Tamaño de bloque
const blockWidth=100;
const blockHeight=20;
const gridWidth=560;
const gridHeight=300;
const ballWidth=20
const ballHeight=20

let xDirection = 2
let yDirection = 2
let score=0


const userStart=[230,10];
let currentPosition=userStart; //posición actual (centro del grid)
const ballStart=[230,40]
let ballCurrentPosition=ballStart

let timerID;

class block{
    //Coordenadas de las cuatro esquinas del bloque
    constructor(x, y){
        this.bottomLeft=[x,y]; //posición base
        this.bottomRight=[x+blockWidth,y];
        this.topLeft=[x, y+blockHeight];
        this.topRight=[x+blockWidth, y+blockHeight];
    }
}

//Array de bloques
let blocks=[
    new block(10, 270),
    new block(120, 270),
    new block(230, 270),
    new block(340, 270),
    new block(450, 270),
    new block(10, 210),
    new block(120, 210),
    new block(230, 210),
    new block(340, 210),
    new block(450, 210),

    
]

function addBlocks(){

    for(let i=0; i<blocks.length; i++){

        let block=document.createElement("div");
        block.classList.add("block");
        block.style.position="absolute";
        block.style.left=blocks[i].bottomLeft[0]+"px" //x
        block.style.bottom=blocks[i].bottomLeft[1]+"px" //y
        grid.appendChild(block);
    }
    
}


function drawUser(){
    user.style.left=currentPosition[0]+"px";
    user.style.bottom=currentPosition[1]+"px";
}

function drawBall(){
    ball.style.left=ballCurrentPosition[0]+"px"
    ball.style.bottom=ballCurrentPosition[1]+"px"
}


function moveUser(e){
    switch(e.key){
        case "ArrowLeft":
            if(currentPosition[0]>0){
                currentPosition[0] -=10; //pre-decremento
                drawUser();
            }
            
            break;
        case "ArrowRight":
            if(currentPosition[0]<(gridWidth-blockWidth)){
                currentPosition[0] +=10; //pre-decremento
                drawUser();
            }
            break;

    }
}

function changeDirection(){
    //Cambios de coordenadas
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
      }
      if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
      }
      if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
      }
      if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
      }
}

function checkForCollisions(){
   
    for(let i=0;i<blocks.length;i++){
         //Comprueba si la bola colisiona con los bloques
        if((ballCurrentPosition[0]> blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
          (ballCurrentPosition[1]+ballHeight> blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]) ){
            
            const allBlocks=Array.from(document.querySelectorAll(".block"))
            //Eliminamos el bloque
            allBlocks[i].classList.remove("block")
            blocks.splice(i,1)

            changeDirection()

            score++
            displayScore.innerHTML=score

            if(blocks.length==0){
                displayScore.innerHTML="Has ganado!!!"
                //Detenemos la bola
                clearInterval(timerID)
               
            }   
        }
    }

    //Comprueba las colisiones con las paredes del grid
    if(ballCurrentPosition[0]>=(gridWidth-ballWidth)
    || ballCurrentPosition[1]>=(gridHeight-ballHeight)
    || ballCurrentPosition[0]<=0 ){
        changeDirection();
    }

    if(ballCurrentPosition[1]<=0){
        displayScore.innerHTML="GAME OVER";
        alert("GAME OVER");
        clearInterval(timerID)
        document.removeEventListener("keydown",moveUser)
    }

    //Comprueba las colisiones con el usuario
    if((ballCurrentPosition[0] >= currentPosition[0] && ballCurrentPosition[0] <= (currentPosition[0] + blockWidth)) &&
    (ballCurrentPosition[1] >= currentPosition[1] && ballCurrentPosition[1] <= (currentPosition[1] + blockHeight )) ){
        changeDirection()
    }
}


function moveBall(){
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall();
    checkForCollisions();
}

document.addEventListener("keydown",moveUser);

//Agregar los bloques
addBlocks();

//Agregar el usuario
const user=document.createElement("div");
user.classList.add("user");
user.style.position="absolute";
drawUser();
grid.appendChild(user);

//Agregar la pelota
const ball=document.createElement("div");
ball.classList.add("ball");
ball.style.position="absolute"
drawBall();
grid.appendChild(ball)

//movimientos
timerID=setInterval(moveBall,20)
