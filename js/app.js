const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("your-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = `: ${userChoice}`
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    const choices = ["rock", "paper", "scissors", "scissors"]
    computerChoice = choices[randomNumber]
    computerChoiceDisplay.innerHTML = `: ${computerChoice}`
}

function getResult() {
    if (userChoice === computerChoice) {
        result = "It's a draw"
    } else if (userChoice === "rock" && computerChoice === "paper") {
        result = "You lose!"
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        result = "You win"
    } else if (userChoice === "paper" && computerChoice === "rock") {
        result = "You win"
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        result = "You lose!"
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        result = "You lose!"
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        result = "You win"
    }

    resultDisplay.innerHTML = result
}