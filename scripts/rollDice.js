//Defaults
var defaultDiceValue = 6;
var result = document.querySelector("h3");

function main(){
    computeResults(rollDiceRandomPlayer1(), rollDiceRandomPlayer2());
}

function computeResults(num1, num2){
    if (num1 > num2){
        result.style.color = "#08d9d6";
        result.innerHTML = "Player 1 Wins!";
        document.querySelector("button").innerHTML = "Roll the dice!";
    } else if (num1 < num2){
        result.style.color = "#ff2e63";
        result.innerHTML = "Player 2 Wins!";
        document.querySelector("button").innerHTML = "Roll the dice!";
    } else {
        result.style.color = "#f6ab6c";
        document.querySelector("button").innerHTML = "Re-roll!";
        result.innerHTML = "Its a Draw!";
    }
}

function rollDiceRandomPlayer1(){
    var random = Math.floor((Math.random() * defaultDiceValue) + 1);
    document.querySelector(".img1").setAttribute("src", "images/dice" + random + ".png");
    return random;
}

function rollDiceRandomPlayer2(){
    var random = Math.floor((Math.random() * defaultDiceValue) + 1);
    document.querySelector(".img2").setAttribute("src", "images/dice" + random + ".png");
    return random;
}

document.querySelector("button").addEventListener("click", main);