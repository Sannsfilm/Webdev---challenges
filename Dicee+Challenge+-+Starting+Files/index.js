var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var Path1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", Path1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var Path1 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", Path1);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var path1 = "./images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", path1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var path2 = "./images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", path2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.getElementById("btn").addEventListener("click", rollDice);

rollDice();
