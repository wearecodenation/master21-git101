console.log('Hello world');

let winner = 'Spurs';

if (winner === 'Spurs') {
  console.log('Come on you Spurs');
}

function singSong(player) {
  switch (player) {
    case 'Eric Dier':
      return 'I love Eric Dier, Eric Dier loves me';
    case 'Moussa Sissiko':
      return "Wake me up, before you go go, We've got Bale and we've got Sissoko";
    case 'Harry Kane':
      return "He's one of our own, He's one of our own, Harry Kane, He's one of our own";
    default:
      return 'Oh when the spurs, Go marching in...';
  }
}

console.log(singSong('Moussa Sissiko'));

const firstTeamPlayers = ['Harry Kane', 'Son', 'Eric Dier', 'Ndembele'];

console.log(firstTeamPlayers);

for (let i = 0; i < firstTeamPlayers.length; i++) {
  console.log(singSong(firstTeamPlayers[i]));
}

function isMyTeamTheBest(team) {
  return team === 'Spurs' ? 'Yes' : 'No';
}

console.log(isMyTeamTheBest('Liverpool'));
