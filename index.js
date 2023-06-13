


var randomNumber1 = Math.floor(Math.random() * 6)+1;

var diceNo1 = "dice"+randomNumber1+".png";
var randomDice = "images/"+ diceNo1;

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomDice);


 /**DICE NO 2**/

 var randomNumberFOR2 = Math.floor(Math.random() * 6)+1;

var diceNo2 = "dice"+randomNumberFOR2+".png";
var randomDice = "images/"+ diceNo2;

 var image2 = document.querySelectorAll("img")[1];

 image2.setAttribute("src", randomDice);

 //**CHANGE THE HEADING**//

 if (randomNumber1 > randomNumberFOR2 ){
    document.querySelector("h1").innerHTML = "player 1 wins";

 }

  else if (randomNumber1 < randomNumberFOR2 ){
    document.querySelector("h1").innerHTML = "player 2 wins";}
   else if (randomNumber1 = randomNumberFOR2 ){
        document.querySelector("h1").innerHTML = "DRAW"; }
