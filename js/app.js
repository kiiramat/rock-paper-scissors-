const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("your-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 0) {
        computerChoice = "rock"
    } else if (randomNumber === 1) {
        computerChoice = "paper"
    } else if (randomNumber === 2) {
        computerChoice = "scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}