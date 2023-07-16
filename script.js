"use strict";
let score = 0;
document.querySelector(".Score1").textContent = score;
document.querySelector(".Score2").textContent = score;

let lifespan = 5;
const sect = function (hello) {
  document.querySelector(".Lifespan1").textContent = hello;
};
const sect2 = function (hello) {
  document.querySelector(".Lifespan2").textContent = hello;
};

let randomNumber = Math.trunc(Math.random() * 10) + 1;
console.log(randomNumber);
document.querySelector(".CHECK").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".input-number1").value);
  if (!guessNumber) {
    document.querySelector(".result-sect").textContent =
      "oopss!You haven't entered a number";
  } else if (guessNumber === randomNumber) {
    if (score > 2) {
      document.querySelector(".Score1").textContent = score;
      document.querySelector(".reset").style.backgroundColor = "#00ff62";
      document.querySelector(".number").textContent = randomNumber;

      document.querySelector(".result-sect").textContent = "YOU WON! ";
      document.querySelector(".result-sect").style.color = "#00ff62";
    } else {
      score++;

      document.querySelector(".Score1").textContent = score;
      document.querySelector(".reset").style.backgroundColor = "#00ff62";
      document.querySelector(".number").textContent = randomNumber;

      document.querySelector(".result-sect").textContent = "correct number ";
      document.querySelector(".result-sect").style.color = "#00ff62";
    }
  } else if (guessNumber < randomNumber) {
    if (lifespan < 1) {
      document.querySelector(".result-sect").textContent = "YOU LOST!";
    } else {
      document.querySelector(".result-sect").textContent =
        "not correct,number is low!";
      lifespan--;
      document.querySelector(".Lifespan1").textContent = lifespan;
      document.querySelector(".result-sect").style.color = "#FFFF00";
    }
  } else if (guessNumber > randomNumber) {
    if (lifespan < 1) {
      document.querySelector(".result-sect").textContent = "YOU LOST!";
    } else {
      document.querySelector(".result-sect").textContent =
        "not correct,number is high!";
      lifespan--;
      sect(lifespan);
      document.querySelector(".result-sect").style.color = "#FFFF00";
    }
  }
});

const randomNumber2 = Math.trunc(Math.random() * 10) + 1;
console.log(randomNumber2);
document.querySelector(".CHECK2").addEventListener("click", function () {
  const guessNumber2 = Number(document.querySelector(".input-number2").value);
  if (!guessNumber2) {
    document.querySelector(".result-sect").textContent =
      "oopss!You haven't entered a number";
  } else if (guessNumber2 === randomNumber2) {
    if (score > 2) {
      document.querySelector(".Score2").textContent = score;
      document.querySelector(".reset").style.backgroundColor = "#00ff62";
      document.querySelector(".number").textContent = randomNumber;

      document.querySelector(".result-sect").textContent = "YOU WON! ";
      document.querySelector(".result-sect").style.color = "#00ff62";
    } else {
      score++;
      document.querySelector(".Score2").textContent = score;

      document.querySelector(".number").textContent = randomNumber2;

      document.querySelector(".result-sect").textContent = "correct number ";
      document.querySelector(".result-sect").style.color = "#00ff62";
    }
  }
  //too low
  else if (guessNumber2 < randomNumber2) {
    if (lifespan < 1) {
      document.querySelector(".result-sect").textContent = "YOU LOST!";
    } else {
      lifespan--;
      sect2(lifespan);
      document.querySelector(".result-sect").textContent =
        "not correct,number is low!";
      document.querySelector(".result-sect").style.color = "#FF0000";
    }

    //too high
  } else if (guessNumber2 > randomNumber2) {
    if (lifespan < 1) {
      document.querySelector(".result-sect").textContent = "YOU LOST!";
    } else {
      lifespan--;
      sect2(lifespan);
      document.querySelector(".result-sect").textContent =
        "not correct,number is high!";
      document.querySelector(".result-sect").style.color = "#FF0000";
    }
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(".input-number1").value = " ";
  document.querySelector(".number").textContent = " ?";
  document.querySelector(".input-number2").value = " ";
});
