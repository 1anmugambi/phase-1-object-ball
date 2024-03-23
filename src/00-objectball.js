// Part 1: Building the Object

// Function to create and return the gameObject
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Function to access the home team's name
  function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
  
  // Function to access the away team's name
  function awayTeamName() {
    return gameObject()["away"]["teamName"];
  }
  
  // Function to access the home team's colors
  function homeTeamColors() {
    return gameObject()["home"]["colors"];
  }
  
  // Function to access the away team's colors
  function awayTeamColors() {
    return gameObject()["away"]["colors"];
  }
  
  // Function to access the players of a given team
  function teamPlayers(teamName) {
    return gameObject()[teamName]["players"];
  }
  
  // Function to access a player's stats by name
  function playerStats(playerName) {
    const teams = Object.keys(gameObject());
    for (let i = 0; i < teams.length; i++) {
      const players = teamPlayers(teams[i]);
      if (players.hasOwnProperty(playerName)) {
        return players[playerName];
      }
    }
    return null;
  }
  
  // Function to return the shoe size of a player by name
  function shoeSize(playerName) {
    const stats = playerStats(playerName);
    if (stats) {
      return stats.shoe;
    }
    return null;
  }
  
  // Function to return the number of points scored by a player
  function numPointsScored(playerName) {
    const stats = playerStats(playerName);
    if (stats) {
      return stats.points;
    }
    return null;
  }
  
  // Function to return the team colors based on team name
  function teamColors(teamName) {
    if (teamName === homeTeamName()) {
      return homeTeamColors();
    } else if (teamName === awayTeamName()) {
      return awayTeamColors();
    }
    return null;
  }
  
  // Function to return an array of all team names
  function teamNames() {
    return [homeTeamName(), awayTeamName()];
  }
  
  // Function to return an array of player numbers for a given team
  function playerNumbers(teamName) {
    const players = teamPlayers(teamName);
    return Object.values(players).map(player => player.number);
  }
  
  // Function to return the number of rebounds for the player with the biggest shoe size
  function bigShoeRebounds() {
    const teams = Object.keys(gameObject());
    let largestShoeSize = 0;
    let rebounds = 0;
    for (let i = 0; i < teams.length; i++) {
      const players = teamPlayers(teams[i]);
      const playerNames = Object.keys(players);
      for (let j = 0; j < playerNames.length; j++) {
        const player = players[playerNames[j]];
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          rebounds = player.rebounds;
        }
      }
    }
    return rebounds;
  }
  
  // Part 2: Bonus Questions
  
  // Function to return the player with the most points
  function mostPointsScored() {
    const teams = Object.keys(gameObject());
    let mostPoints = 0;
    let playerName = "";
    for (let i = 0; i < teams.length; i++) {
      const players = teamPlayers(teams[i]);
      const playerNames = Object.keys(players);
      for (let j = 0; j < playerNames.length; j++) {
        const player = players[playerNames[j]];
        if (player.points > mostPoints) {
          mostPoints = player.points;
          playerName = playerNames[j];
        }
      }
    }
    return playerName;
  }
  
  // Function to return the team with the most points
  function winningTeam() {
    const teams = Object.keys(gameObject());
    let highestPoints = 0;
    let winningTeamName = "";
    for (let i = 0; i < teams.length; i++) {
      const players = teamPlayers(teams[i]);
      const playerNames = Object.keys(players);
      let teamPoints = 0;
      for (let j = 0; j < playerNames.length
  