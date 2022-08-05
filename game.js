class ticTacToe {
  constructor(playerOne, playerTwo) {
    playerBanner.innerText = "Itchy's turn..."
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
    this.clearGameBoard();
    this.gameOver = false;
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
      tokenSpacesVis[gridPosition - 1].innerText = this.tokenPositions[gridPosition]
      playerBanner.innerText = "Scratchy's turn..."
      this.playerOneTurn = false;
    } else {
      this.tokenPositions[gridPosition] = playerTwo.token;
      tokenSpacesVis[gridPosition - 1].innerText = this.tokenPositions[gridPosition]
      playerBanner.innerText = "Itchy's turn..."
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
      playerBanner.innerText = "Itchy Wins!"
    } else if (!this.playerOneTurn) {
      playerTwo.increaseWins();
      playerBanner.innerText = "Scratchy Wins!"
    }
  }

  checkForDraw(){
    if (!this.someoneWon && this.turnsTaken === 9) {
      console.log("DRAW!");
      this.startClearTimer();
    }
  }

  clearGameBoard() {
    console.log("ding!");
      var keys = Object.keys(this.tokenPositions)
      for (let i = 0; i < keys.length; i++) {
      this.tokenPositions[keys[i]] = "";
      tokenSpacesVis[i].innerText = "";
      this.turnsTaken = 0;
    }
  }

  startClearTimer() {
    var timeoutID = setTimeout(() => {this.clearGameBoard()}, 5000);    
    console.log(`timer ${timeoutID} started...`);
  }
  
}

