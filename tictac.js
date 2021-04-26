const warn = document.querySelector(".warn");
const playerFirst = document.querySelector(".playerFirst"); //input1
const playerSecond = document.querySelector(".playerSecond"); // input2
const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");
const endGame = document.querySelector(".endGame");
const ticTacToe = document.querySelector(".ticTacToe");
endGame.addEventListener("click", endGameAll);
const submit = document.querySelector(".submit");
submit.addEventListener("click", nameFunction);
let started = false;
const square = document.querySelectorAll(".square");
let player1 = [];
let player2 = [];
const winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
function startGame(){
square.forEach((element, index) => {
    if(element.innerHTML === ""){     
element.addEventListener("click", function(){
    elementsAdd(element, index);
})}
})
}


  function elementsAdd(element, index){
if(element.innerHTML === ""){
    if(player1.length == player2.length){
        element.innerHTML = "X";
      player1.push(index);
    } else{
      element.innerHTML = "O";
      player2.push(index);
 }
}
  comparisonPlayers(player1,player2);
   console.log(player1, player2);
  }


// Girilen Array değerlerini karışılatırma
function comparisonPlayers(player1, player2){
   let a = playerFirst.value.toUpperCase();
   let b = playerSecond.value.toUpperCase();
    winningArray.forEach((winningElement) => {    
        if (player1.includes(winningElement[0]) && player1.includes(winningElement[1]) && player1.includes(winningElement[2])){
            ticTacToe.innerHTML = `Winner  Player 1`;
            setTimeout(function(){  endGamer();}, 2000);
            
        } else if (player2.includes(winningElement[0]) && player2.includes(winningElement[1]) && player2.includes(winningElement[2])){
            ticTacToe.innerHTML = `Winner  Player 2`; 
            setTimeout(function(){  endGamer();}, 2000);
        }
    });
}
function endGamer(){

    square.forEach((element) => {
        element.innerHTML = "";
    })
    player1 = [];
    player2 = [];
}

// Girilen inputları playerlara yazdırma
function nameFunction(){   
    if(playerFirst.value === "" || playerSecond.value === ""){
        alert("Please enter the names!");
    }else{
        playerOne.innerHTML = playerFirst.value.toUpperCase();
        playerTwo.innerHTML = playerSecond.value.toUpperCase();  
        startGame();
    }
    

    changeColor();
    deleteInsideInput();
    started = true;
   
  }
 function changeColor(){
    playerOne.classList.add("text-info");
    playerTwo.classList.add("text-info");
 }
 function deleteInsideInput(){
     playerFirst.value="";
     playerSecond.value="";
 }
 function endGameAll(){
    playerOne.innerHTML = "Player 1";
    playerTwo.innerHTML= "Player 2";
    playerOne.classList.remove("text-info");
    playerTwo.classList.remove("text-info");
    ticTacToe.innerHTML = "Tic Tac Toe";
    square.forEach((element) => {
        element.innerHTML = "";
    });
    
}

