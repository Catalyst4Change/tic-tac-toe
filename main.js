// var spaceOne = document.getElementById('1');
// var spaceTwo = document.getElementById('2');
// var spaceThree = document.getElementById('3');
// var spaceFour = document.getElementById('4');
// var spaceFive = document.getElementById('5');
// var spaceSix = document.getElementById('6');
// var spaceSeven = document.getElementById('7');
// var spaceEight = document.getElementById('8');
// var spaceNine = document.getElementById('9');



var tokenSpacesVis = document.querySelectorAll('.token-space')
var gameBoard = document.querySelector('.game-board');
var gridPosition = 0;
var playerOne = new Player('🐭')
var playerTwo = new Player('😺')
var someoneWon = false;
var newGame = new ticTacToe(playerOne.token, playerTwo.token)
console.log(newGame);

gameBoard.addEventListener('click', intParser);

function intParser(eventData) {
  gridPosition = parseInt(eventData.target.id);
  console.log(gridPosition);
  newGame.checkGridSpace(gridPosition);
}


// newGame.checkGridSpace)

// function showData(event) {
//   console.log(event.path[0].id);
// }