"use strict";
//player1 section

let score = 0;
let player1Score = function (s1) {
  document.querySelector(".Score1").textContent = s1;
};
const player2Score = function (s2) {
  document.querySelector(".Score2").textContent = s2;
};
const resetBgcolor = function (rsc) {
  document.querySelector(".reset").style.backgroundColor = rsc;
};

let result = function (r) {
  document.querySelector(".result-sect").textContent = r;
};
const resultColor = function (c) {
  document.querySelector(".result-sect").style.color = c;
};

let displayNumber = function (n) {
  document.querySelector(".number").textContent = n;
};

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

  //when input field is blank or with alphabet
  if (!guessNumber) {
    result("oopss!You haven't entered a number");
  }
  //win situation
  else if (guessNumber === randomNumber) {
    if (score > 2) {
      player1Score(score);
      resetBgcolor("#00ff62");
      displayNumber(randomNumber);

      result("YOU WON! ");
      resetBgcolor("#00ff62");
      //correct guess
    } else {
      score++;

      player1Score(score);
      resetBgcolor("#00ff62");
      displayNumber(randomNumber);

      result("correct number ");
      resultColor("#00ff62");
    }
  }
  //lost situation
  else if (guessNumber < randomNumber) {
    if (lifespan < 1) {
      result("YOU LOST!");
    }
    //low guess situation
    else {
      console.log((result = "not correct,number is low!"));
      lifespan--;
      sect(lifespan);
      resultColor("#FFFF00");
    }
  }
  //high guess situation
  else if (guessNumber > randomNumber) {
    if (lifespan < 1) {
      result("YOU LOST!");
    } else {
      result("not correct,number is high!");
      lifespan--;
      sect(lifespan);
      resultColor("#FFFF00");
    }
  }
});

//player2 section
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
