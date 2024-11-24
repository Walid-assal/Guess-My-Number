`use strict`

const number = document.querySelector(`.number`)
const message = document.querySelector(`.message`)
const guess = document.querySelector(`.guess`)
const score = document.querySelector(`.score`)
const highscore = document.querySelector(`.highscore`)
let currentScore = 20 ;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

score.textContent =  currentScore
number.textContent = secretNumber

document.querySelector(`.check`).addEventListener(`click`,function(){
    if (!guess.value) {
        message.textContent= "⛔ No Number"
    }
    else if(guess.value> secretNumber ){
        message.textContent= "📈 Too High"
        currentScore--;
        score.textContent =  currentScore
        if(currentScore < 1){
            currentScore=0;
            score.textContent = 0
            message.textContent = "💥 You Lost The Game"
        }
    }
    else if(guess.value<secretNumber ){
        message.textContent= "📉 Too Low"
        currentScore--;
        score.textContent =  currentScore
        if(currentScore < 1){
            currentScore=0;
            score.textContent = 0
            message.textContent = "💥 You Lost The Game"
        }
    }
    else if(guess.value==secretNumber ){
        message.textContent= "🎉 Correct Number"
        document.querySelector(`body`).style.backgroundColor = "#60b347"
        number.style.width = "300px"
        score.textContent =  currentScore

    }


})