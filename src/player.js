class Player {
  constructor(id, token) {
    this.id = "";
    this.token = token;
    this.winCount = 0;
  }

  increaseWins() {
    this.winCount += 1;
  }
}