console.log("Welcome to Tic Tac Toe Game");

// initially, the turn will be X
let turn = "X";

let gameover = false;

// function to change the turn
const changeTurn = () => {

    // The strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result.
    // if turn is X, then after that turn will be O else, it will be X 

    return turn === "X" ? "O" : "X";
}

// function to check for win
const checkWin = () =>{

    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== ""))
        {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "20vw";
            
        }
    })


}

// Constructing Game Logic

// First, we are going to add onclick listeners to our game grid

let boxes = document.getElementsByClassName("box");

// The Array.from() method returns an array from any object with a length property.
// The Array.from() method returns an array from any iterable object and an HTML collection since we have 9 boxes
// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. 
// If no matches are found, null is returned. 

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click" , () =>{
        if(boxtext.innerText === "")
        {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameover)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
           
        }
    })
})


// Reset button onclick listener
reset.addEventListener('click' , ()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";

    })
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0";

})


