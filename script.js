function getComputerChoice() {
  // Array of choices
  let choices = ['Rock', 'Paper', 'Scissors'];
  
  for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  
  return choices[0];
  
}

// First, get references to the buttons
const rockButton = document.getElementById('Rock');
const paperButton = document.getElementById('Paper');
const scissorsButton = document.getElementById('Scissors');

// Function to handle clicks
function playerChoice(choice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(choice, computerChoice);
  
  // Update the webpage with the result
  document.getElementById('player-choice').textContent = `${choice}`;
  document.getElementById('computer-choice').textContent = `${computerChoice}`;
}

function determineWinner(playerChoice, computerChoice) {
  const playerWinsElement = document.getElementById('player-wins');
  const computerWinsElement = document.getElementById('computer-wins');

  let result;

  if (playerChoice === computerChoice) {
      result = "It's a tie!";
  } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') ||
             (playerChoice === 'Paper' && computerChoice === 'Rock') ||
             (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
      result = 'Player wins!';
      playerWinsElement.textContent = parseInt(playerWinsElement.textContent) + 1; // Increment player's wins
  } else {
      result = 'Computer wins!';
      computerWinsElement.textContent = parseInt(computerWinsElement.textContent) + 1; // Increment computer's wins
  }

  // Update the webpage with the choices
  document.getElementById('player-choice').textContent = `Player chose: ${playerChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
  
  // Update the game result
  document.getElementById('game-result').textContent = result;

  return result;
}



// Add click event listeners to the buttons
rockButton.addEventListener('click', function() { playerChoice('Rock'); });
paperButton.addEventListener('click', function() { playerChoice('Paper'); });
scissorsButton.addEventListener('click', function() { playerChoice('Scissors'); });
