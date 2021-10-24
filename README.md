# Code-Quiz
This week I build a timed code quiz that's made up of multiple-choice questions. This app runs in the browser and feature dynamically updated HTML and CSS powered by JavaScript code.

![Screen Shot 2021-10-24 at 1 51 08 PM](https://user-images.githubusercontent.com/90152576/138606443-892704c1-4276-45d1-ac2d-8fa706b63e50.png)

![Screen Shot 2021-10-24 at 2 08 31 PM](https://user-images.githubusercontent.com/90152576/138606993-d13191fa-1ea6-4f00-89c1-4c48e6db2c19.png)
https://hlaing56.github.io/Code-Quiz/

## Acceptance Criteria
```
GIVEN I am taking a code quiz
WHEN I click the Start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Process of making this application

smalls things first-
1. make the header with a link to highscore and a timer that start when you click start quiz
2. make the question div box
3. in the main body make it so when you click start quiz or one of the multiple answers it takes you to the first or next qustion
4. figure out how to make it so it can tell you if you answered wrong on not
5. make it so when worng, minus time from timer
6. after you answered all the questions give your time from timer as highscore
7. save highscore into local storage
8. make timer reset to 99 everytime you click start quiz and make time stop at 0
