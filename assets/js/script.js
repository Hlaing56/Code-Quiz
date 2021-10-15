var countdownEl = document.querySelector('#startButton');
var timerEl = document.querySelector('#timer');

function countdown() {
    var timeLeft = 100;
  
    var timeInterval = setInterval(function() {
        timerEl.textContent = "Timer: " + timeLeft;
        timeLeft--
  
    }, 1000);

};

function changeContent() {
    document.getElementById('intro').style = "display: none";
    document.getElementById('qOne').style = "display: contents";
 };


countdownEl.addEventListener('click', function() {

    countdown();

    changeContent();
});
