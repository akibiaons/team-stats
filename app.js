const team = {
    _players: [
      {firstName: 'James', lastName: 'Harden', age: 22},
      {firstName: 'Leo', lastName: 'Messi', age: 30},
      {firstName: 'Steph', lastName: 'Curry', age: 29}
    ],
    _games: [
      {opponent: 'Chargers', teamPoints: 4, opponentPoints: 3},
      {opponent: 'Lakers', teamPoints: 5, opponentPoints: 2},
      {opponent: 'Dodgers', teamPoints: 8, opponentPoints: 8} 
    ],
  
    get players(){
      return this._players
    },
  
    get games(){
      return this._games
    },
  
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints,newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);