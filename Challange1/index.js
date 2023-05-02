var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;
var randIm1 = "images/dice" + rand1 + ".png";
var randIm2 = "images/dice" + rand2 + ".png";
document.querySelector(".img1").setAttribute("src", randIm1);
document.querySelector(".img2").setAttribute("src", randIm2);

var h1text = document.querySelector("h1");

if (rand1 > rand2) h1text.innerHTML = "Player 1 Wins!";
else if (rand2 > rand1) h1text.innerHTML = "Player 2 Wins!";
else h1text.innerHTML = "It's a Draw!";