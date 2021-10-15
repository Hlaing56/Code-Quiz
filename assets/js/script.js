var countdownEl = document.querySelector('#startButton');
var timerEl = document.querySelector('#timer');




function countdown() {
    var timeLeft = 100;
  
    var timeInterval = setInterval(function() {
        timerEl.textContent = "Timer: " + timeLeft;
        timeLeft--
  
    }, 1000);
}

countdownEl.addEventListener('click', function() {

    countdown();
});
