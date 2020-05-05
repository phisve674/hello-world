// TODO:
// * Make background red when a letter is wrong. ✔
// * Create word randomizer.
// * Add scrolling of lines. ✔

let currentWordItteration = 0;
let text = getRandomWords();

for (let i = 0; i < 200; i++) {
    text = text + " " + getRandomWords();
}

let words = text.split(" ");
let correctWords = 0;
let timerStarted = false;

window.onload = function() {
    window.input = document.getElementsByTagName("input")[0];

    for (let i = 0; i < words.length; i++) {
        let span = document.createElement("span");
        document.getElementById("text").appendChild(span);
        span.innerHTML = words[i];
        document.getElementById("text").insertBefore(document.createTextNode(" "), span);
    }

    window.currentWord = document.getElementsByTagName("span");
    currentWord[currentWordItteration].style.background = "rgb(32,32,32)";

    input.addEventListener("keyup", function(e) {
        if (timerStarted == false) {
            timer();
            timerStarted = true;
        }

        let checkWord = input.value.split(" ")[0];
        let overflow = input.value.split(" ")[1];

        if (e.key == " ") {

            if (checkWord == words[currentWordItteration]) {
                currentWord[currentWordItteration].style.color = "lime";
                correctWords += 1;
            } else {
                currentWord[currentWordItteration].style.color = "red";
            }
            wordBackground();
        
            input.value = overflow;
            currentWordItteration += 1;
        } else {
            if (checkWord != currentWord[currentWordItteration].innerHTML.slice(0, input.value.length)) {
                currentWord[currentWordItteration].style.background = "rgb(255,0,0)";
            } else {
                currentWord[currentWordItteration].style.background = "rgb(32,32,32)";
                currentWord[currentWordItteration].style.color = "unset";
            }
        }
    });
}

function wordBackground() {
    currentWord[currentWordItteration].style.background = null;
    currentWord[currentWordItteration + 1].style.background = "rgb(32,32,32)";
    document.getElementById("text").style.top = -currentWord[currentWordItteration + 1].offsetTop;
}

let time = 60;

function timer() {
    setTimeout(function timeout() {
        if (time > 0 && timerStarted == true) {
            time -= 1;
            if (time < 10) {
                document.getElementById("timer").innerHTML = "0:0" + time;
            } else {
                document.getElementById("timer").innerHTML = "0:" + time;
            }
            timer();
        } else {
            window.result = document.getElementById("result")
            if (timerStarted == true) {
                result.innerHTML = "Result: " + correctWords + " wpm";
                result.style.display = "inline-block";
                document.getElementsByTagName("body")[0].classList.add("flex-start");
    
                input.blur();
                input.value = null;
            }
        }
    }, 1000);
}

function reset() {
    for (let i = 0; i < words.length; i++) {
        currentWord[i].style.color = null;
        currentWord[i].style.background = null;
    }

    input.value = null;
    result.style.display = "none";
    document.getElementsByTagName("body")[0].classList.remove("flex-start");

    currentWordItteration = 0;
    correctWords = 0;
    timerStarted = false;
    time = 60;
    document.getElementById("timer").innerHTML = "1:00";
    currentWord[currentWordItteration].style.background = "rgb(32,32,32)";
    document.getElementById("text").style.top = 0;
}

function getRandomWords() {
    return randomWords[Math.floor(Math.random()*randomWords.length)];
}