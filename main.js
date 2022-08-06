var tokenSpacesVis = document.querySelectorAll('.token-space');
var gameBoard = document.querySelector('.game-board');
var centerBanner = document.querySelector('.banner');

var playerOne = new Player('🪚')
var playerOneBanner = document.querySelector('#P1-wins')
var playerTwo = new Player('🪓')  
var playerTwoBanner = document.querySelector('#P2-wins')


var newGame = new ticTacToe(playerOne, playerTwo)

gameBoard.addEventListener('click', handleClick);


function handleClick(eventData) {
  var gridPosition = parseInt(eventData.target.id);
  newGame.checkGridSpace(gridPosition);
  renderBoard();
}

function renderBoard() {
  for (let i = 0; i < tokenSpacesVis.length; i++) {
    tokenSpacesVis[i].innerText = newGame.tokenPositions[i + 1]
  }

}

function updateScores() {
  playerOneBanner.innerText = `${playerOne.winCount}`;
  playerTwoBanner.innerText = `${playerTwo.winCount}`;
}

function updateBannerTurn(player) {
  centerBanner.innerText = `${player}'s Turn!`;
}

function updateBannerWin(player) {
  centerBanner.innerText = `${player} WINS!`;
}

function updateBannerDraw() {
  centerBanner.innerText = `DRAW!`;
}
