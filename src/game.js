class ticTacToe {
  constructor(playerOne, playerTwo) {
    this.chooseWeapon = true;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
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
    };

    this.weapons = {
      1: "🪓",
      2: "🪚",
      3: "⛏",
      4: "🗡",
      5: "🔪",
      6: "🖋",
      7: "💣",
      8: "🪠",
      9: "🧨"
    };

// experimemtal

    this.winningCombos = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]
  };

  applyChosenWeapon(gridPosition) {
    if (this.playerOneTurn) {
      this.playerOne.token = this.weapons[gridPosition];
      this.weapons[gridPosition] = "";
      this.playerOneTurn = false;
      renderBoard();
      renderWeapons();
      scratchyChooseWeapon();

    } else {
      this.playerTwo.token = this.weapons[gridPosition];
      renderWeapons();
      this.chooseWeapon = false;
      this.playerOneTurn = true;
      this.clearGameBoard();
    }
  }

  checkGridSpace(gridPosition) {
    if (!this.gameOver && this.tokenPositions[gridPosition] === "") {
      this.claimGridSpace(gridPosition);
    }
  }

  claimGridSpace(gridPosition) {
    this.turnsTaken += 1;
    if (this.playerOneTurn) {
      this.tokenPositions[gridPosition] = this.playerOne.token;
      this.playerOneTurn = false;
      updateBanner("Scratchy's turn!");
      
    } else {
      this.tokenPositions[gridPosition] = this.playerTwo.token;
      this.playerOneTurn = true;
      updateBanner("Itchy's turn!");
    }

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
    };
  };

  someoneWon() {
  this.gameOver = true;
  this.startClearTimer();
  
  if (!this.playerOneTurn) {
      this.playerOne.increaseWins();
      updateBanner('ITCHY WINS!');
      updateScores();

    } else if (this.playerOneTurn) {
      this.playerTwo.increaseWins();
      updateBanner('SCRATCHY WINS!');
      updateScores();
    };
  };

  checkForDraw() {
    if (!this.gameOver && this.turnsTaken === 9) {
      this.gameOver = true;
      this.startClearTimer();
      updateBanner('DRAW!');
    };
  };
  
  startClearTimer() {
    setTimeout(() => {this.clearGameBoard()}, 3000);    
  };

  clearGameBoard() {
    for (let i = 1; i < 10; i++) {
      this.tokenPositions[i] = "";
    };

    this.turnsTaken = 0;
    this.gameOver = false;
    renderBoard();

    if (this.playerOneTurn) {
      updateBanner("Itchy's turn!")
    } else {
      updateBanner("Scratchy's turn!")
    };
  };
};

