class Player {
  constructor(token) {
    this.token = token;
    this.winCount = 0;
    this.tokenPositions = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false
    }
  }

  increaseWins() {
    this.winCount += 1;
  }
}

module.exports = Player;