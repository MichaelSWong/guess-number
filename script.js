document.querySelector('.check').addEventListener('click', getGuess);
const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function getGuess() {
  const guess = Number(document.querySelector('.guess').value);
  console.log({ secretNumber });

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Guess!';
    document.querySelector('.number').textContent = secretNumber;
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
