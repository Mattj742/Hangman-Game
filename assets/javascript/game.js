var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wordList = ["hansbrough", "green", "ford", "jordan", "carter", "johnson",
    "cota", "worthy", "wallace", "smith"
];

var imageList = ["assets/images/hansbrough.jpg", "assets/images/green.jpg", "assets/images/ford.jpg",
    "assets/images/jordan.jpg", "assets/images/carter.jpg", "assets/images/johnson.jpg", "assets/images/cota.jpg",
    "assets/images/worthy.jpg", "assets/images/wallace.jpg", "assets/images/smith.jpg"
];

var blank = "";
var image = document.getElementById("image");
var win = document.getElementById("win");
var usedlettersarray = [];
var usedletters = document.getElementById("lettersGuessed");
var guessRemain = document.getElementById("guessRemain");
var increment = 1;
var guessed = "";



var word = wordList[Math.floor(Math.random() * wordList.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

document.getElementById("word").innerHTML = answerArray.join("");


document.onkeyup = function(event) {

    var userGuess = event.key;

    if (userGuess === letters.length); {

        document.getElementById("lettersGuessed").innerHTML += userGuess + ",";
    }

    for (var j = 0; j < word.length; j++) {
        if (word[j] === userGuess) {
            document.getElementById("word").innerHTML = userGuess; //I know this is replacing the "_ _ _ _" with the user guess, not sure how to replace just the specific "_"
            usedlettersarray += userGuess;
        } else {
            usedlettersarray += userGuess;
            guessRemain.innerHTML -= increment; //not right. takes guesses down by number of missing letters in the target word, instead of just by 1
        }
    }


}
