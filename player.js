class Player {
  constructor(token) {
    this.token = token;
    this.winCount = 0;
  }

  increaseWins() {
    this.winCount += 1;
  }
}