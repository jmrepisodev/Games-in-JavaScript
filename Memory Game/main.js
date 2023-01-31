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
let cardsChosen=[];

//Genera el tablero
function createBoard(){

    for(let i=0; i<cardArray.length; i++){
        const card=document.createElement("img");
        card.setAttribute("src","images/blank.png");
        card.setAttribute("data-id",i);
        card.addEventListener("click",flipCard);
        console.log(card)
        gridDisplay.appendChild(card);

    }
}

createBoard();

function flipCard(){
    const cardID=this.getAttribute("data-id");
    //console.log("clicked",cardID)
    //console.log(cardArray[cardID].name)
    cardsChosen.push(cardArray[cardID].name);
    this.setAttribute("src",cardArray[cardID].image);
  
}



    
