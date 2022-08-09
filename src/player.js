class Player {
  constructor(name, token) {
    this.id = name;
    this.token = token;
    this.winCount = 0;
  }

  increaseWins() {
    this.winCount += 1;
  }
}