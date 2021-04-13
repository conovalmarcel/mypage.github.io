const game = confirm("Do you want play a game?");
console.log(game);

if (game) {
  const number = prompt("Choose a number from 0 to 10");
  while (number > 10) {
    const number = prompt("Wrong number, Choose a number from 0 to 10");
    if (number <= 10) {
      const guess = prompt("Guess the number of another player from 0 to 10");
    }
  }

  if (number <= 10) {
    const guess = prompt("Guess the number of another player from 0 to 10");
    while (number != guess) {
      const guess = prompt("Wrong number, Choose a number from 0 to 10");
    }
    alert("Good job");
  }
} else {
  const msg = alert("You are not interesting person");
  console.log("You are not interesting person");
}
