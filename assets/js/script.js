var countdownEl = document.querySelector('#startButton');
var timerEl = document.querySelector('#timer');
var container = document.querySelector("#ans");
var submitEl = document.querySelector("#submit");

var i = 0;

var questions = [
    {
        quest: "What color is the tongue of a giraffe",
        answer1: "black",
        answer2: "blue",
        answer3: "pink",
        answer4: "red"
     },
    {
        quest: "Does this work",
        answer1: "yes",
        answer2: "kinda",
        answer3: "nope",
        answer4: "IDK"
    },
    {
        quest: "What color is the sun",
        answer1: "red",
        answer2: "orange",
        answer3: "yellow",
        answer4: "IDK"
    }
]

var answers = [questions[0].answer4, questions[1].answer2, questions[2].answer4]

var length = questions.length - 1;

// var score = 0;
var timeLeft = 99;

function countdown() {

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Timer: " + timeLeft;
        timeLeft--
  
    }, 1000);


    
    submitEl.addEventListener("click", function(event) {
        clearInterval(timeInterval);

    });
    
    //     console.log(timeLeft + 1);

    //     score = timeLeft + 1;

    //     console.log(score);

    // });
};

document.getElementById('question').textContent = questions[i].quest;
document.getElementById('answer1').textContent = questions[i].answer1;
document.getElementById('answer2').textContent = questions[i].answer2;
document.getElementById('answer3').textContent = questions[i].answer3;
document.getElementById('answer4').textContent = questions[i].answer4;

function changeContent1() {
    document.getElementById('intro').style = "display: none";
    document.getElementById('question').style = "display: contents";
    document.getElementById('ans').style = "display: contents";
};
countdownEl.addEventListener('click', function() {

    countdown();

    changeContent1();

});

function wrongPopup() {
    var time = 1;

    var timeInterval = setInterval(function () {
        if(time > 0){
            document.getElementById('wrongPop').style = "display: contents";
            time--;

        } else {
            document.getElementById('wrongPop').style = "display: none";
            clearInterval(timeInterval);
        }

    }, 1000);    
};

container.addEventListener("click", function(event) {
    var element = event.target; 

    if(element.textContent != answers[i]) {
        wrongPopup();
        timeLeft = timeLeft - 10;
    };

    i++;
    
    if (i < questions.length) {
    document.getElementById('question').textContent = questions[i].quest;
    document.getElementById('answer1').textContent = questions[i].answer1;
    document.getElementById('answer2').textContent = questions[i].answer2;
    document.getElementById('answer3').textContent = questions[i].answer3;
    document.getElementById('answer4').textContent = questions[i].answer4;
    };

    if (i === questions.length) {
        document.getElementById('submit').style = "display: contents";
        console.log("done");
    };
});


