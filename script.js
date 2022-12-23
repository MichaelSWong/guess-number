document.querySelector('.check').addEventListener('click', getGuess);
document.querySelector('.again').addEventListener('click', reset);

let secretNumber = createSecretNumber();
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

function getGuess() {
  const guess = Number(document.querySelector('.guess').value);

  // When their is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // When Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Guess!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👇 Too High!' : '👆 Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Game Over!');
      document.querySelector('.check').setAttribute('disabled', true);
      document.querySelector('.score').textContent = 0;
    }
  }
}

function reset() {
  secretNumber = createSecretNumber();
  score = 20;
  displayMessage('Start guessing..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

function createSecretNumber() {
  return Math.floor(Math.random() * 20) + 1;
}
