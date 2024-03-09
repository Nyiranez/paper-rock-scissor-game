const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'  ) {
        return userInput;
      } else {
        console.log('Error!');
      }
};
getUserChoice("rock");

function getComputerChoice(){
   let numb= Math.floor(Math.random() * 3);
    if(numb === 0) {
        return 'rock';
    }
      else if(numb === 1) {
        return "paper"
      }

      else if(numb === 2){
        return "scissors"
      }
       else{

       }   return 'invalid';
         
}

console.log(getComputerChoice());


function determineWinner(userChoice,computerChoice){
    if (userChoice ==="bomb"){
        return "you win"
    }
   if(userChoice ===computerChoice){
    return "the game was a tie."
   }


  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
   
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  else if(userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}


const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice))
  };

  playGame();