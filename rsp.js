const computerChoiceDisplayNormal = document.getElementById('computer-choice-normal')
const userChoiceDisplayNormal = document.getElementById('user-choice-normal')
const resultDisplayNormal = document.getElementById('result-normal')
const normalPossibleChoices = document.querySelectorAll('.normal')
let userChoiceNormal
let computerChoiceNormal
let resultNormal

normalPossibleChoices.forEach(normalPossibleChoice => normalPossibleChoice.addEventListener('click', (e) => {
    userChoiceNormal = e.target.id
    userChoiceDisplayNormal.innerHTML = userChoiceNormal
    generateComputerChoiceNormal()
}));

function generateComputerChoiceNormal() {
    const randomNumber = Math.floor(Math.random() * 3) ;
    if(randomNumber === 0) {
        computerChoiceNormal = 'rock'
    } else if (randomNumber === 1) {
        computerChoiceNormal = 'sissors'
    } else {
        computerChoiceNormal = 'paper'
    }

    computerChoiceDisplayNormal.innerHTML = ''
    resultDisplayNormal.innerHTML = ''

    const seeNormal = document.createElement('button')
    seeNormal.classList.add('seeButton')
    seeNormal.addEventListener('click', () => {
        computerChoiceDisplayNormal.innerHTML = computerChoiceNormal
        getResultNormal()
        seeNormal.classList.remove('seeButton')
    })
    computerChoiceDisplayNormal.appendChild(seeNormal)
}

function getResultNormal() {
    if (computerChoiceNormal == userChoiceNormal) {
        resultNormal = "It's a draw."
    } else if (
        (userChoiceNormal == 'rock' && computerChoiceNormal == 'paper') || 
        (userChoiceNormal == 'sissors' && computerChoiceNormal == 'rock') || 
        (userChoiceNormal == 'paper' && computerChoiceNormal == 'sissors')) {
        resultNormal = "You lose."
    } else {
        resultNormal = "You win."
    }

    resultDisplayNormal.innerHTML = resultNormal

}

// User win

const computerChoiceDisplayWin = document.getElementById('computer-choice-win')
const userChoiceDisplayWin = document.getElementById('user-choice-win')
const resultDisplayWin = document.getElementById('result-win')
const winPossibleChoices = document.querySelectorAll('.win')
const finalResultCom = document.querySelector('.final-result-com')
const finalResultUser = document.querySelector('.final-result-user')
let resultBoxCom = []
let resultBoxUser = []
let userChoiceWin
let computerChoiceWin
let resultWin

winPossibleChoices.forEach(winPossibleChoice => winPossibleChoice.addEventListener('click', (e) => {
    userChoiceWin = e.target.id
    userChoiceDisplayWin.innerHTML = userChoiceWin
    generateComputerChoiceWin()
}));

function generateComputerChoiceWin() {

    const randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber === 0) {
        computerChoiceWin = 'rock'
    } else if (randomNumber === 1) {
        computerChoiceWin = 'sissors'
    } else {
        computerChoiceWin = 'paper'
    }

    computerChoiceDisplayWin.innerHTML = ''
    resultDisplayWin.innerHTML = ''

    const seeWin = document.createElement('button')
    seeWin.classList.add('seeButton')
    seeWin.addEventListener('click', () => {
        computerChoiceDisplayWin.innerHTML = computerChoiceWin
        getResultWin()
        seeWin.classList.remove('seeButton')
    })
    computerChoiceDisplayWin.appendChild(seeWin)
    
}

function getResultWin() {
    if (computerChoiceWin == userChoiceWin) {
        resultWin = "It's a draw."
    } else if (
        (userChoiceWin == 'rock' && computerChoiceWin == 'paper') || 
        (userChoiceWin == 'sissors' && computerChoiceWin == 'rock') || 
        (userChoiceWin == 'paper' && computerChoiceWin == 'sissors')) {
        resultWin = "You lose."
        resultBoxCom.push('o')
        finalResultCom.innerHTML = resultBoxCom
    } else {
        resultWin = "You win."
        resultBoxUser.push('o')
        finalResultUser.innerHTML = resultBoxUser
    }

    resultDisplayWin.innerHTML = resultWin

    if (resultBoxCom.length >= 3) {
        finalResultCom.innerHTML = 'Computer wins!'
        resultBoxCom.length = 0
        resultBoxUser.length = 0
        finalResultUser.innerHTML = resultBoxUser
    }
    if (resultBoxUser.length >= 3) {
        finalResultUser.innerHTML = 'You win!'
        resultBoxCom.length = 0
        resultBoxUser.length = 0
        finalResultCom.innerHTML = resultBoxCom
    } 

}