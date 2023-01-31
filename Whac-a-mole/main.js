const squaresArray=document.querySelectorAll(".square");
const mole=document.querySelector(".mole");
const timeLeft=document.querySelector("#time-left");
const score=document.querySelector("#score");

let result=0;

function randomSquare(){

    squaresArray.forEach(square=>{
        //elimina la clase
        square.classList.remove("mole");
    })

    //selecciona aleatoriamente un elemento del array
   let randomSquare=squaresArray[Math.floor(Math.random()*9)];
   console.log(randomSquare);
   //agrega una clase
   randomSquare.classList.add("mole");
}

randomSquare()