var tokenSpacesVis = document.querySelectorAll('.token-space');
var gameBoard = document.querySelector('.game-board');
var playerBanner = document.querySelector('.banner');
var gridPosition = 0;
var playerOne = new Player('🪚')
var playerTwo = new Player('🪓')
var someoneWon = false;
var newGame = new ticTacToe(playerOne.token, playerTwo.token)
console.log(newGame);

gameBoard.addEventListener('click', intParser);

function intParser(eventData) {
  gridPosition = parseInt(eventData.target.id);
  console.log(gridPosition);
  newGame.checkGridSpace(gridPosition);
}
