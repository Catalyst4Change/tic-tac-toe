var playerOne = new Player('🪚')
var playerTwo = new Player('🪓')  
var newGame = new ticTacToe(playerOne, playerTwo)
var playerOneBanner = document.querySelector('#P1-wins')
var playerTwoBanner = document.querySelector('#P2-wins')
var centerBanner = document.querySelector('.banner');
var gameBoard = document.querySelector('.game-board');
var tokenSpacesVis = document.querySelectorAll('.token-space');
var playerOneWeapon = document.querySelector('.itchy-weapon');
var playerTwoWeapon = document.querySelector('.scratchy-weapon')
var titleCard = document.querySelector('.title-card');
var startGameButton = document.querySelector('.start-game-button')


gameBoard.addEventListener('click', handleClick);
startGameButton.addEventListener('click', startGame)

function startGame() {
  titleCard.remove();
}


itchyChooseWeapon();

function itchyChooseWeapon() {
  centerBanner.innerHTML = "Itchy, choose<br>your weapon!";
  newGame.chooseWeapons = true;
  newGame.tokenPositions = newGame.weapons;
  renderBoard();
}

function scratchyChooseWeapon() {
  centerBanner.innerHTML = "Scratchy, choose<br>your weapon!";
  // renderBoard();
}


function handleClick(eventData) {
  var gridPosition = parseInt(eventData.target.id);
  if (newGame.chooseWeapon) {
    newGame.applyChosenWeapon(gridPosition);
  } else {
    newGame.checkGridSpace(gridPosition);
  }
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

function updateBanner(text) {
  centerBanner.innerText = `${text}`;
}