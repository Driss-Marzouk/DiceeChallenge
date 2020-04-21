// genarting random numbers between 1 and 2
var random_number1 = Math.floor(Math.random()*6)+1;
var random_number2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+random_number1+".png")
document.querySelector(".img2").setAttribute("src","images/dice"+random_number2+".png")
if (random_number1 > random_number2){
  document.querySelector(".container h1").innerText = "Player1 Wins"
}
else if(random_number1 == random_number2){
  document.querySelector(".container h1").innerText = "Draw"
}
else{
  document.querySelector(".container h1").innerText = "Player2 Wins"
}
