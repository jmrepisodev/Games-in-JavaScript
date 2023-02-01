const squaresArray=document.querySelectorAll(".square");
const mole=document.querySelector(".mole");
const timeLeft=document.querySelector("#time-left");
const score=document.querySelector("#score");

let result=0;
let hitPosition;
let timerID;
let countDownTimerID;
let currentTime=10;

function randomSquare(){

    squaresArray.forEach(square=>{
        //elimina la clase
        square.classList.remove("mole");
    })

    //selecciona aleatoriamente un elemento del array. De 0 a 8
   let randomSquare=squaresArray[Math.floor(Math.random()*9)];
   console.log(randomSquare);
   //agrega una clase
   randomSquare.classList.add("mole");

   hitPosition=randomSquare.id;
}

squaresArray.forEach(square=>{
    square.addEventListener("mousedown", ()=>{
        if(square.id==hitPosition){
            result++;
            console.log(result)
            score.innerHTML=result;
            hitPosition=null;
        }
    })
})

function moveMole(){
    timerID=setInterval(randomSquare,500);
}

function countDown(){
    currentTime--;
    timeLeft.textContent=currentTime;

    if(currentTime===0){
        clearInterval(countDownTimerID);
        clearInterval(timerID)
        alert("GAME OVER. Tu puntuación es :"+result);
    }
}

randomSquare()

moveMole()

countDownTimerID=setInterval(countDown,1000);