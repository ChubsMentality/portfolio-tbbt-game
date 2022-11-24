// localStorage.setItem('score', score)
var playerChoice, computerChoice, result, playAgain
var arrChoices = ["Rock", "Paper", "Scissor", "Lizard", "Spock"]
var score = localStorage.getItem('score') !== null ? localStorage.getItem('score') : 0
localStorage.setItem('score', score)

if(localStorage.getItem('score')) {
  score = parseInt(localStorage.getItem('score'), 10)
}

// Game steps
var firstStep = document.getElementById('firstStepContainer')
var secondStep = document.getElementById('secondStepContainer')

// First step buttons
var rockBtn = document.getElementById('rock')
var paperBtn = document.getElementById('paper')
var scissorBtn = document.getElementById('scissor')
var lizardBtn = document.getElementById('lizard')
var spockBtn = document.getElementById('spock')
var rulesBtn = document.getElementById('rules-btn')
var rulesBtn2 = document.getElementById('rules-btn2')

// Second step
var playerPickedRock = document.getElementById('playerPickedRock')
var playerPickedPaper = document.getElementById('playerPickedPaper')
var playerPickedScissor = document.getElementById('playerPickedScissor')
var playerPickedLizard = document.getElementById('playerPickedLizard')
var playerPickedSpock = document.getElementById('playerPickedSpock')
var housePickedRock = document.getElementById('housePickedRock')
var housePickedPaper = document.getElementById('housePickedPaper')
var housePickedScissor = document.getElementById('housePickedScissor')
var housePickedLizard = document.getElementById('housePickedLizard')
var housePickedSpock = document.getElementById('housePickedSpock')
var housePrePick = document.getElementById('housePrePick')
var playerWon = document.getElementById('player-won-indicator')
var houseWon = document.getElementById('house-won-indicator')

// Results
var result = document.getElementById('result')
var playAgainBtn = document.getElementById('playAgainBtn')
var scoreTxt = document.getElementById('score')

scoreTxt.innerHTML = score

// Rules modal
var rulesOverlay = document.getElementById('overlay')
var rulesModal = document.getElementById('rules-modal')
var playRulesBtn = document.getElementById('button-play-audio')
var lottieAudioWave = document.getElementById('lottie-audio-wave')
var closeModal = document.getElementById('rules-modal-close-icon')

const playerWonIndicator = () => {
  playerWon.classList.remove('displayNone')
  playerWon.classList.add('won-result-indicator')
}

const houseWonIndicator = () => {
  houseWon.classList.remove('displayNone')
  houseWon.classList.add('lost-result-indicator')
}

const commenceSecondStep = () => {
  secondStep.classList.remove('displayNone')
  secondStep.classList.add('secondStepContainer')

  if(playerChoice === 'Rock') {
    playerPickedRock.classList.remove('displayNone')
    playerPickedRock.classList.add('displayPicked')
    playerPickedRock.classList.add('pickedRock')
  } else if(playerChoice === 'Paper') {
    playerPickedPaper.classList.remove('displayNone')
    playerPickedPaper.classList.add('displayPicked')
    playerPickedPaper.classList.add('pickedPaper')
  } else if(playerChoice === 'Scissor') {
    playerPickedScissor.classList.remove('displayNone')
    playerPickedScissor.classList.add('displayPicked')
    playerPickedScissor.classList.add('pickedScissor')
  } else if(playerChoice === 'Lizard') {
    playerPickedLizard.classList.remove('displayNone')
    playerPickedLizard.classList.add('displayPicked')
    playerPickedLizard.classList.add('pickedLizard')
  } else if(playerChoice === 'Spock') {
    playerPickedSpock.classList.remove('displayNone')
    playerPickedSpock.classList.add('displayPicked')
    playerPickedSpock.classList.add('pickedSpock')
  }
 
  let rand = Math.floor(Math.random(arrChoices) * 5)
  let i = arrChoices[rand]
  console.log(i)
  computerChoice = i

  housePrePick.classList.remove('housePrePick')
  housePrePick.classList.add('displayNone')

  if(computerChoice === 'Rock') {
    housePickedRock.classList.remove('displayNone')
    housePickedRock.classList.add('displayPicked')
    housePickedRock.classList.add('pickedRock')
  } else if(computerChoice === 'Paper') {
    housePickedPaper.classList.remove('displayNone')
    housePickedPaper.classList.add('displayPicked')
    housePickedPaper.classList.add('pickedPaper')
  } else if(computerChoice === 'Scissor') {
    housePickedScissor.classList.remove('displayNone')
    housePickedScissor.classList.add('displayPicked')
    housePickedScissor.classList.add('pickedScissor')
  } else if(computerChoice === 'Lizard') {
    housePickedLizard.classList.remove('displayNone')
    housePickedLizard.classList.add('displayPicked')
    housePickedLizard.classList.add('pickedLizard')
  } else if(computerChoice === 'Spock') {
    housePickedSpock.classList.remove('displayNone')
    housePickedSpock.classList.add('displayPicked')
    housePickedSpock.classList.add('pickedSpock')
  }

  switch (playerChoice) {
    // Rock
    case "Rock":
      if (computerChoice === "Rock") {
        console.log("tie");
        result.innerHTML = 'TIED'
      } else if (computerChoice === "Paper") {
        console.log('YOU LOSE')
        result.innerHTML = 'YOU LOSE'
        score--
        scoreTxt.innerHTML = score
        houseWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Spock") {
        console.log("YOU LOSE");
        result.innerHTML = 'YOU LOSE'
        score--
        scoreTxt.innerHTML = score
        houseWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Scissor") {
        console.log("YOU WIN");
        result.innerHTML = 'YOU WIN'
        score++
        scoreTxt.innerHTML = score
        playerWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Lizard") {
        console.log("YOU WIN");
        result.innerHTML = 'YOU WIN'
        score++
        scoreTxt.innerHTML = score
        playerWonIndicator()
        localStorage.setItem('score', score)
      }
      break;

    // Paper
    case "Paper":
      if (computerChoice === "Paper") {
        console.log("tie");
        result.innerHTML = 'TIED'
      } else if (computerChoice === "Scissor") {
        console.log("YOU LOSE");
        result.innerHTML = 'YOU LOSE'
        score--
        scoreTxt.innerHTML = score
        houseWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Lizard") {
        console.log("YOU LOSE");
        result.innerHTML = 'YOU LOSE'
        score--
        scoreTxt.innerHTML = score
        houseWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Spock") {
        console.log("YOU WIN");
        result.innerHTML = 'YOU WIN'
        score++
        scoreTxt.innerHTML = score
        playerWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Rock") {
        console.log("YOU WIN");
        result.innerHTML = 'YOU WIN'
        score++
        scoreTxt.innerHTML = score
        playerWonIndicator()
        localStorage.setItem('score', score)
      }
      break;

    // Scissors
    case "Scissor":
      if (computerChoice === "Scissor") {
        console.log("tie");
        result.innerHTML = 'TIED'
      } else if (computerChoice === "Rock") {
        console.log("YOU LOSE");
        result.innerHTML = 'YOU LOSE'
        score--
        scoreTxt.innerHTML = score
        houseWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Spock") {
        console.log("YOU LOSE");
        result.innerHTML = 'YOU LOSE'
        score--
        scoreTxt.innerHTML = score
        houseWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Paper") {
        console.log("YOU WIN");
        result.innerHTML = 'YOU WIN'
        score++
        scoreTxt.innerHTML = score
        playerWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Lizard") {
        console.log("YOU WIN");
        result.innerHTML = 'YOU WIN'
        score++
        scoreTxt.innerHTML = score
        playerWonIndicator()
        localStorage.setItem('score', score)
      }
      break;

    // Lizard
    case "Lizard":
      if (computerChoice === "Lizard") {
        console.log("tie");
        result.innerHTML = 'TIED'
      } else if (computerChoice === "Rock") {
        console.log("YOU LOSE");
        result.innerHTML = 'YOU LOSE'
        score--
        scoreTxt.innerHTML = score
        houseWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Scissor") {
        console.log("YOU LOSE");
        result.innerHTML = 'YOU LOSE'
        score--
        scoreTxt.innerHTML = score
        houseWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Paper") {
        console.log("YOU WIN");
        result.innerHTML = 'YOU WIN'
        score++
        scoreTxt.innerHTML = score
        playerWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Spock") {
        console.log("YOU WIN");
        result.innerHTML = 'YOU WIN'
        score++
        scoreTxt.innerHTML = score
        playerWonIndicator()
        localStorage.setItem('score', score)
      }
      break;

    // Spock
    case "Spock":
      if (computerChoice === "Spock") {
        console.log("tie");
        result.innerHTML = 'TIED'
      } else if (computerChoice === "Lizard") {
        console.log("YOU LOSE");
        result.innerHTML = 'YOU LOSE'
        score--
        scoreTxt.innerHTML = score
        houseWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Paper") {
        console.log("YOU LOSE");
        result.innerHTML = 'YOU LOSE'
        score--
        scoreTxt.innerHTML = score
        houseWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Rock") {
        console.log("YOU WIN");
        result.innerHTML = 'YOU WIN'
        score++
        scoreTxt.innerHTML = score
        playerWonIndicator()
        localStorage.setItem('score', score)
      } else if (computerChoice === "Scissor") {
        console.log('YOU WIN')
        result.innerHTML = 'YOU WIN'
        score++
        scoreTxt.innerHTML = score
        playerWonIndicator()
        localStorage.setItem('score', score)
      }
      break;
  }
}

const handlePlayAgain = () => {
  playerWon.classList.remove('won-result-indicator')
  playerWon.classList.add('displayNone')

  houseWon.classList.remove('lost-result-indicator')
  houseWon.classList.add('displayNone')

  secondStep.classList.remove('secondStepContainer')
  secondStep.classList.add('displayNone')

  playerPickedRock.classList.add('displayNone')
  playerPickedPaper.classList.add('displayNone')
  playerPickedScissor.classList.add('displayNone')
  playerPickedLizard.classList.add('displayNone')
  playerPickedSpock.classList.add('displayNone')
  housePickedRock.classList.add('displayNone')
  housePickedPaper.classList.add('displayNone')
  housePickedScissor.classList.add('displayNone')
  housePickedLizard.classList.add('displayNone')
  housePickedSpock.classList.add('displayNone')
  score = parseInt(localStorage.getItem('score'), 10)
  scoreTxt.innerHTML = score

  firstStep.classList.remove('displayNone')
  firstStep.classList.add('firstStepContainer')
}

// Toggling the rules modal
rulesBtn.addEventListener('click', () => {

  // Removing the 'displayNone' class to the elements
  rulesOverlay.classList.remove('displayNone')
  rulesModal.classList.remove('displayNone')
  
  // Adding the intended styles of the modal elements
  rulesOverlay.classList.add('overlay')
  rulesModal.classList.add('rules-modal')
})

rulesBtn2.addEventListener('click', () => {

  // Removing the 'displayNone' class to the elements
  rulesOverlay.classList.remove('displayNone')
  rulesModal.classList.remove('displayNone')
  
  // Adding the intended styles of the modal elements
  rulesOverlay.classList.add('overlay')
  rulesModal.classList.add('rules-modal')
})

closeModal.addEventListener('click', () => {
  rulesOverlay.classList.remove('overlay')
  rulesModal.classList.remove('rules-modal')

  document.getElementById('rules-audio').pause()
  document.getElementById('rules-audio').currentTime = 0

  lottieAudioWave.classList.remove('lottie-audio-wave')
  lottieAudioWave.classList.add('displayNone')

  rulesOverlay.classList.add('displayNone')
  rulesModal.classList.add('displayNone')
})

playRulesBtn.addEventListener('click', () => {
  document.getElementById('rules-audio').play()

  lottieAudioWave.classList.remove('displayNone')
  lottieAudioWave.classList.add('lottie-audio-wave')

  setTimeout(() => {
    lottieAudioWave.classList.remove('lottie-audio-wave')
    lottieAudioWave.classList.add('displayNone')
  }, 14500)
})

// Choices buttons
rockBtn.addEventListener('click', () => {
  playerChoice = 'Rock'

  firstStep.classList.remove('firstStepContainer')
  firstStep.classList.add('displayNone')

  commenceSecondStep()
})

paperBtn.addEventListener('click', () => {
  playerChoice = 'Paper'

  firstStep.classList.remove('firstStepContainer')
  firstStep.classList.add('displayNone')

  commenceSecondStep()
})

scissorBtn.addEventListener('click', () => {
  playerChoice = 'Scissor'

  firstStep.classList.remove('firstStepContainer')
  firstStep.classList.add('displayNone')

  commenceSecondStep()
})

lizardBtn.addEventListener('click', () => {
  playerChoice = 'Lizard'

  firstStep.classList.remove('firstStepContainer')
  firstStep.classList.add('displayNone')

  commenceSecondStep()
})

spockBtn.addEventListener('click', () => {
  playerChoice = 'Spock'

  firstStep.classList.remove('firstStepContainer')
  firstStep.classList.add('displayNone')

  commenceSecondStep()
})