

document.getElementById("rock").addEventListener("click", function() {
  gameResult("rock");
});

document.getElementById("paper").addEventListener("click", function() {
  gameResult("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
  gameResult("scissors");
});


function gameResult(playerChoice) {
 
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("player-choice").innerHTML = `<p> ${playerChoice}</p>`;

  document.getElementById("computer-choice").innerHTML = `<p> ${computerChoice}</p>`;

 
  let result = "";
  /*
  if (playerChoice === computerChoice) {
      result = "Scoreless!";
  } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
  ) {
      result = "You win!";
  } else {
      result = "You lose!";
  }
*/
switch (true) {
  case (playerChoice === computerChoice):
    result = "Scoreless!";
    break;
  case (playerChoice === "rock" && computerChoice === "scissors"):
  case (playerChoice === "paper" && computerChoice === "rock"):
  case (playerChoice === "scissors" && computerChoice === "paper"):
    result = "You win!";
    break;
  default:
    result = "You lose!";
    break;
}


 
  document.getElementById("result").textContent = result;
}
