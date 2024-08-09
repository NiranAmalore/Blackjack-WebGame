let player = {
    name: "Niran Amalore",
    chips: 210
}

let cards = []
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false

let statusElement = document.getElementById("status-element")
let sumElement = document.querySelector("#sum-el")              //Learned Query Selector which uses CSS selectors in JS to modify elements
let cardsElement = document.querySelector("#cards-element")
let playerElement = document.querySelector("#player-element")

playerElement.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) return 11
    else if(randomNumber > 10) return 10
    else return randomNumber
}

function renderGame(){

    cardsElement.textContent = "Cards: "

    for(let i = 0; i<cards.length; i++){
        cardsElement.textContent += cards[i] + " "
    }
    sumElement.textContent = "Sum: " + sum
    if(sum<21){
         message = "Do you want to draw a new card? ";
    }
    else if(sum == 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game! "
        isAlive = false
    }
    statusElement.textContent = message
}

function newCard(){
    if(isAlive == true && hasBlackJack == false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
