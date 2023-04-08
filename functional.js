let playerScore = 0;
let computerScore = 0;

// const iconMap = {
//   rock: "<img src='rock.png'>",
//   paper: "<img src='paper.png'>",
//   scissors: "<img src='scissors.png'>",
// };

//update total score and set to html element holding score totals to display
function updateScore() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playGame(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Cat's Game";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    document.getElementById(
      "player-choice"
    ).innerHTML = `You chose: ${playerSelection}`;
    document.getElementById(
      "computer-choice"
    ).innerHTML = `Computer chose: ${computerSelection}`;
    const result = `Winner! ${playerSelection} beats ${computerSelection} every time!`;
    displayResult(playerSelection, computerSelection, result);
    return result;
  } else {
    computerScore++;
    document.getElementById(
      "player-choice"
    ).innerHTML = `You chose: ${playerSelection}`;
    document.getElementById(
      "computer-choice"
    ).innerHTML = `Computer chose: ${computerSelection}`;
    const result = `You lose. ${computerSelection} could never beat ${playerSelection}`;
    displayResult(playerSelection, computerSelection, result);
    updateScore();
    return result;
  }
}

function game(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playGame(playerSelection, computerSelection);
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.innerHTML += `<p>${result}</p>`;
}

document.getElementById("rock-icon").addEventListener("click", function () {
  game("rock");
});

document.getElementById("paper-icon").addEventListener("click", function () {
  game("paper");
});

document.getElementById("scissors-icon").addEventListener("click", function () {
  game("scissors");
});

function displayResult(playerChoice, computerChoice, result) {
  const playerIcon = playerChoice;
  const computerIcon = computerChoice;
  const resultDisplay = document.getElementById("result");
  resultDisplay.innerHTML = `
      <div>
        <div>Player chose: ${playerIcon}</div>
        <div>Computer chose: ${computerIcon}</div>
        <div>${result}</div>
      </div>
    `;
}

//VERSION 1
// let playerScore = 0;
// let computerScore = 0;

// //update total score and set to html element holding score totals to display
// function updateScore() {
//   document.getElementById("player-score").textContent = playerScore;
//   document.getElementById("computer-score").textContent = computerScore;
// }

// function getComputerChoice() {
//   let options = ["rock", "paper", "scissors"];
//   return options[Math.floor(Math.random() * options.length)];
// }

// function playGame(playerSelection, computerSelection) {
//   playerSelection = playerSelection.toLowerCase();

//   if (playerSelection === computerSelection) {
//     return "Cat's Game";
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissors" && computerSelection === "paper")
//   ) {
//     playerScore++;
//     return `Winner! ${playerSelection} beats ${computerSelection} every time!`;
//   } else {
//     computerScore++;
//     return `You lose. ${computerSelection} could never beat ${playerSelection}`;
//   }
// }

// //run until user doesnt confirm then display score
// function game() {
//   //let keeplaying = true to set truthy value for first game
//   let keepPlaying = true;
//   //connect html to total running score
//   const scoreDisplay = document.getElementById("score");
//   //while keep playing true, will be the case as long as user confirms
//   while (keepPlaying) {
//     //prompt user for selection and set to var
//     const playerSelection = prompt("Choose rock, paper, or scissors:");
//     //set the comp choice to the above random function
//     const computerSelection = getComputerChoice();
//     //display result of game to the html
//     const result = playGame(playerSelection, computerSelection);
//     scoreDisplay.innerHTML += `<p>${result}</p>`;
//     //if you do not confirm, add the final score for the player and conputer to html
//     if (!keepPlaying) {
//       scoreDisplay.innerHTML += `<p>Final score: Player ${playerScore}, Computer ${computerScore}</p>`;
//     }
//     //confirm is user wants to continue
//     keepPlaying = confirm("Do you want to keep playing?");
//   }
// }

// //run 5 times
// // function game() {
// //   for (let i = 0; i < 5; i++) {
// //     const playerSelection = prompt("Choose rock, paper, or scissors:");
// //     const computerSelection = getComputerChoice();
// //     console.log(playGame(playerSelection, computerSelection));
// //   }
// // }

// game();
