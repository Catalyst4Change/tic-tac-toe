class ticTacToe {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne
    this.playerTwo = playerTwo
    this.gameOver = false;
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
    if (!this.gameOver && this.tokenPositions[gridPosition] === "") {
      this.claimGridSpace(gridPosition);
    }
  }

  claimGridSpace(gridPosition) {
    this.turnsTaken += 1
    if (this.playerOneTurn) {
      this.tokenPositions[gridPosition] = this.playerOne.token;
      this.playerOneTurn = false;
      updateBannerTurn('Scratchy')
    } else {
      this.tokenPositions[gridPosition] = this.playerTwo.token;
      this.playerOneTurn = true;
      updateBannerTurn('Itchy')
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
    } else if (this.tokenPositions[2] === this.tokenPositions[5] && this.tokenPositions[5] === this.tokenPositions[8] && this.tokenPositions[8] != "") {
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
  this.gameOver = true;
  this.startClearTimer()
  if (!this.playerOneTurn) {
      this.playerOne.increaseWins();
      updateBannerWin('ITCHY')
      updateScores()
    } else if (this.playerOneTurn) {
      this.playerTwo.increaseWins();
      updateBannerWin('SCRATCHY')
      updateScores()
    }
  }

  checkForDraw() {
    if (!this.gameOver && this.turnsTaken === 9) {
      this.gameOver = true;
      this.startClearTimer();
      updateBannerDraw()
    }
  }
  
  startClearTimer() {
    var timeoutID = setTimeout(() => {this.clearGameBoard()}, 3000);    
  }

  clearGameBoard() {
    for (let i = 1; i < 10; i++) {
      this.tokenPositions[i] = "";
    }
    this.turnsTaken = 0;
    this.gameOver = false;
    renderBoard();
    if (this.playerOneTurn) {
      updateBannerTurn('Itchy')
    } else {
      updateBannerTurn('Scratchy')
    }
  }
}

