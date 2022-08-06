var playerOne = new Player('🪚')
var playerTwo = new Player('🪓')  
var newGame = new ticTacToe(playerOne, playerTwo)
var playerOneBanner = document.querySelector('#P1-wins')
var playerTwoBanner = document.querySelector('#P2-wins')
var centerBanner = document.querySelector('.banner');
var gameBoard = document.querySelector('.game-board');
var tokenSpacesVis = document.querySelectorAll('.token-space');

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
