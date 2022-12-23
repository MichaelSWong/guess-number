document.querySelector('.check').addEventListener('click', getGuess);
document.querySelector('.again').addEventListener('click', reset);

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function getGuess() {
  const guess = Number(document.querySelector('.guess').value);
  console.log({ secretNumber });

  // When their is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    // When Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Guess!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over!';
      document.querySelector('.check').setAttribute('disabled', true);
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👆 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over!';
      document.querySelector('.check').setAttribute('disabled', true);
      document.querySelector('.score').textContent = 0;
    }
  }
}

function reset() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}
