const computerChoiceDisplay = document.querySelector('.computer');
const userChoiceDisplay = document.querySelector('.user');
let score = document.querySelector('.score');
const buttons = document.querySelectorAll('.button');
const alert = document.querySelector('.alert');
const reset = document.querySelector('#reset');

let userChoice;
score.innerText = localStorage.getItem('score') || 0;

//function that will append clicked button to the user's choice
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.textContent = `${userChoice}`;
        randomChoice();
        setTimeout(scoreDisplay, 100)
    })
})


//function that will append random choice to computer's choice
function randomChoice() {
    const randomNumber = Math.ceil(Math.random() * 3);
    switch(randomNumber) {
        case 1: 
        computerChoiceDisplay.textContent = 'Rock';
        break;
        case 2:
        computerChoiceDisplay.textContent = 'Paper';
        break;
        case 3:
        computerChoiceDisplay.textContent ='Scissors';
        break;
    }
}

//if statement for a draw. win and loose, pop-up with result
function scoreDisplay() {
if (computerChoiceDisplay.textContent === userChoiceDisplay.textContent) {
    alert.classList.add('.active');
    alert.innerText = "It's a draw! You have to do better to score a point.";
} else if (computerChoiceDisplay.textContent === "Rock" && userChoiceDisplay.textContent === "Paper" ||
computerChoiceDisplay.textContent === "Paper" && userChoiceDisplay.textContent === "Scissors" ||
computerChoiceDisplay.textContent === "Scissors" && userChoiceDisplay.textContent === "Rock") {
    alert.classList.add('.active');
    alert.innerText = "You win! 1 point to Gryffindor!";
    score.innerText ++;
    localStorage.setItem('score', score.innerText);
    localStorage.getItem('score');
} else {
    alert.classList.add('.active');
    alert.innerText = 'You loose!'
}
}

//resetting the score
function resetScore() {
    localStorage.removeItem('score');
    score.innerText = '0';
}

reset.addEventListener('click', resetScore);
