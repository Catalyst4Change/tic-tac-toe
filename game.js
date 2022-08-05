class ticTacToe {
  constructor(playerOne, playerTwo) {
    this.playerOneTurn = true;
    this.turnsTaken = 0; //when gets to 9 game over
    this.tokenPositions = {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: ""
    }
  }

  checkGridSpace(gridPosition) {
    if (this.tokenPositions[gridPosition] === "") {
      this.claimGridSpace(gridPosition);
      console.log(gridPosition);
    }
  }

  claimGridSpace(gridPosition) {
    this.turnsTaken += 1
    console.log('turns', this.turnsTaken);
    if (this.playerOneTurn) {
      this.tokenPositions[gridPosition] = playerOne.token;
      this.playerOneTurn = false;
    } else {
      this.tokenPositions[gridPosition] = playerTwo.token;
      this.playerOneTurn = true;
    }
    console.log(this.tokenPositions);
    this.checkForWin();
    this.checkForDraw();
  }

  checkForWin() {
    if (this.tokenPositions[1] === this.tokenPositions[2] && this.tokenPositions[2] === this.tokenPositions[3] && this.tokenPositions[3] != "") {
      this.someoneWon();
    } else if (this.tokenPositions[4] === this.tokenPositions[5] && this.tokenPositions[5] === this.tokenPositions[6] && this.tokenPositions[6] != "") {
      this.someoneWon();
    } else if (this.tokenPositions[7] === this.tokenPositions[8] && this.tokenPositions[8] === this.tokenPositions[9] && this.tokenPositions[9] != "") {
      this.someoneWon();
    } else if (this.tokenPositions[1] === this.tokenPositions[4] && this.tokenPositions[4] === this.tokenPositions[7] && this.tokenPositions[7] != "") {
      this.someoneWon();
    } else if (this.tokenPositions[2] === this.tokenPositions[5] && this.tokenPositions[5] === this.tokenPositions[6] && this.tokenPositions[6] != "") {
      this.someoneWon();
    } else if (this.tokenPositions[3] === this.tokenPositions[6] && this.tokenPositions[6] === this.tokenPositions[9] && this.tokenPositions[9] != "") {
      this.someoneWon();
    } else if (this.tokenPositions[1] === this.tokenPositions[5] && this.tokenPositions[5] === this.tokenPositions[9] && this.tokenPositions[9] != "") {
      this.someoneWon();
    } else if (this.tokenPositions[3] === this.tokenPositions[5] && this.tokenPositions[5] === this.tokenPositions[7] && this.tokenPositions[7] != "") {
      this.someoneWon();
    }
  }
  someoneWon() {
  console.log('WIN!');
  someoneWon = true;
  this.startClearTimer()
  if (this.playerOneTurn) {
    playerOne.increaseWins();
  } else if (!this.playerOneTurn) {
    playerTwo.increaseWins()
  }
  }

  checkForDraw(){
    if (!someoneWon && this.turnsTaken === 9) {
      console.log("DRAW!");
      this.startClearTimer();
    }
  }

  startClearTimer() {
    var timeoutID = setTimeout(this.clearGameBoard(), [5000]);
    console.log("timer started...");
  }
  
  clearGameBoard() {
    console.log("ding!");
    for (let i = 0; i < this.tokenPositions.length; i++) {
      this.tokenPositions[i] = "";
      this.turnsTaken = 0;
    }
    console.log(this.tokenPositions);
  }
}



/*

win conditions
123
456
789
147
258
369
159
357

know who's turn it is.
display relevant data.

player places toekn on board
listen to each button 
place icon in space via html
change tokenPosition to 1/2

if player1

A way to keep track of which player’s turn it currently is
A way to check the Game’s board data for win conditions
A way to detect when a game is a draw (no one has won)
A way to reset the Game’s board to begin a new game
*/