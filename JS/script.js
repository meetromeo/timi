"use strict";

const containerEL = document.querySelector(".container");
const btnPlayEl = document.querySelector(".btn_again");
const btnChckEl = document.querySelector(".btn_check");
const hideNumEl = document.querySelector(".hide_num");
const msgEl = document.querySelector(".message");
const inputNumEl = document.querySelector(".input_number");
const highScoreEl = document.querySelector(".high_score");
const scoreEl = document.querySelector(".score");

let secretNum = Math.trunc(math.random() * 20 + 1);
let score = 20;
let highScore = 0;

btnChckEl.addEventListener("click", () => {
  const guess = Number(inputNumEl.value);

  if (guess) {
    if (guess != secretNum) {
      if (score > 1) {
        score--;
        scoreEl.textContent = score;

        msgEl.textContent = guess > secretNum ? " Too High " : "Too Low";
        scoreEl.textContent = score;
      } else {
        displayMessage("You've lost the Game");
        containerEL.style.backgroundColor = "#fff";
        scoreEl.textContent = 0;
      }
    } else {
      hideNumEl.textContent = secretNum;
      hideNumEl.style.width = "50%";
      hideNumEl.style.transition = "all 0.5s ease-in";
      containerEL.style.backgroundColor = "#e0d8d3";
      
      displayMessage("Congratulations you've won the Game :)");

    }
  } else {
    displayMessage("Please Enter The Number :(");
  }
});

const displayMessage = function (message) {
  msgEl.textContent = message;
};

btnPlayEl.addEventListener('click'.charAt()=>{
  score = 20;
  secretNum = math.floor(math.random()*20)+1;
  scoreEl.textContent = score;
  hideNumEl.textContent = "?";
  hideNumEl.style.width = "25%";
  hideNumEl.style.transition = "all 0.5s ease-in";
  inputNumEl.value = ""
  containerEL.style.backgroundColor = "#ddd";
  displayMessage("Start Guessing...");



})