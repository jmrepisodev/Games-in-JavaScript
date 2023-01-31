//array de elementos
const cardArray=[

    {
        name: 'fries',
        image: './images/fries.png',

    },
    {
        name: 'cheeseburger',
        image: './images/cheeseburger.png',

    },
    {
        name: 'hotdog',
        image: './images/hotdog.png',

    },
    {
        name: 'ice-cream',
        image: './images/ice-cream.png',

    },
    {
        name: 'pizza',
        image: './images/pizza.png',

    },
    {
        name: 'milkshake',
        image: './images/milkshake.png',

    },
    {
        name: 'fries',
        image: './images/fries.png',

    },
    {
        name: 'cheeseburger',
        image: './images/cheeseburger.png',

    },
    {
        name: 'hotdog',
        image: './images/hotdog.png',

    },
    {
        name: 'ice-cream',
        image: './images/ice-cream.png',

    },
    {
        name: 'pizza',
        image: './images/pizza.png',

    },
    {
        name: 'milkshake',
        image: './images/milkshake.png',

    }

];


/**
 * Ordena un array de forma aleatoria
 */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  //Ordenamos el array al azar
  shuffle(cardArray);

//Otra forma de ordenar un array al azar
//cardArray.sort(()=>0.5-Math.random());

console.log(cardArray);

const gridDisplay=document.getElementById("grid");
const resultDisplay=document.getElementById("score");

let cardsChosen=[];
let cardsChosenID=[];
let cardsWon=[];

//Genera el tablero
function createBoard(){

    //Construímos el tablero
    for(let i=0; i<cardArray.length; i++){
        //LLenamos el grid con el array de imágenes
        const card=document.createElement("img");
        card.setAttribute("src","images/blank.png");
        //Le asignamos un ID y un escuchador de ventos
        card.setAttribute("data-id",i);
        card.addEventListener("click",flipCard);
        console.log(card)
        gridDisplay.appendChild(card);

    }
}

createBoard();

/**
 * Chequea si se ha encontrado una pareja
 */
function checkMatch(){
    //obtiene las imágenes del tablero
    const cards=document.querySelectorAll("#grid img");
    //elementos seleccionados por el usuario
    let optionSelected1=cardsChosenID[0];
    let optionSelected2=cardsChosenID[1];

    //si hay una pareja, cambiamos la imagen y anulamos el escuchador de eventos
    if(cardsChosen[0] === cardsChosen[1]){
        cards[optionSelected1].setAttribute("src","./images/white.png");
        cards[optionSelected1].removeEventListener("click", flipCard);

        cards[optionSelected2].setAttribute("src","./images/white.png");
        cards[optionSelected2].removeEventListener("click", flipCard);

        //almacenamos la pareja ganadora
        cardsWon.push(cardsChosen);

        resultDisplay.innerHTML=cardsWon.length;
        
        alert("¡Enhorabuena! 'Has encontrado una pareja!");

    }else{
        cards[optionSelected1].setAttribute("src","./images/blank.png");
        cards[optionSelected2].setAttribute("src","./images/blank.png");

        alert("¡Lo siento! 'Vuelve a intentarlo otra vez!");
    }

    if(cardsWon.length === cardArray.length/2){
       // alert("¡Enhorabuena! ¡Has completado todas las parejas!");
        resultDisplay.innerHTML="¡Enhorabuena! ¡Has completado todas las parejas!";
    }

    cardsChosen=[];
    cardsChosenID=[];

}

function flipCard(){
    const cardID=this.getAttribute("data-id");
    //console.log("clicked",cardID)
    //console.log(cardArray[cardID].name)
    this.setAttribute("src",cardArray[cardID].image);

   // console.log(cardArray[cardID].name);

    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    
    if(cardsChosen.length === 2){
        //console.log(cardsChosen[0])
       // console.log(cardsChosen[1])
        setTimeout(checkMatch, 500);
    }
  
}





    
