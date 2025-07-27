const gameContainer = document.getElementById('game-container');
const startBtn = document.getElementById('start-btn');
const levelSpan = document.getElementById('level');
const scoreSpan = document.getElementById('score');
const timerEl = document.getElementById('timer');
const timeLeftSpan = document.getElementById('time-left');

const icons = ['🐸','🐢','🐝','🦋','🐞','🐙','🦀','🦄','🐬','🐧','🦜','🦖'];
let level = 1;
let order = [];
let userStep = 0;
let showingOrder = true;
let score = 0;
let countdownInterval = null;
let timeLeft = 0;

function shuffle(array) {
  return array
    .map(value => ({value, sort: Math.random()}))
    .sort((a,b) => a.sort - b.sort)
    .map(({value}) => value);
}

function renderOrderWithNumbers(arr) {
  gameContainer.innerHTML = '';
  arr.forEach((icon, index) => {
    const div = document.createElement('div');
    div.textContent = icon;
    div.classList.remove('correct', 'incorrect');
    div.style.pointerEvents = 'none';

    const label = document.createElement('div');
    label.textContent = index + 1;
    label.className = 'number-label';

    div.appendChild(label);
    gameContainer.appendChild(div);
  });
}

function renderShuffled(arr) {
  gameContainer.innerHTML = '';
  const shuffled = shuffle(arr);
  shuffled.forEach(icon => {
    const div = document.createElement('div');
    div.textContent = icon;
    div.classList.remove('correct', 'incorrect');
    div.style.pointerEvents = 'auto';

    div.addEventListener('click', () => {
      if (!showingOrder) {
        handleUserClick(div, icon);
      }
    });

    gameContainer.appendChild(div);
  });
}

function startTimer(seconds) {
  clearInterval(countdownInterval);
  timeLeft = seconds;
  timeLeftSpan.textContent = timeLeft;
  timerEl.style.animation = '';

  countdownInterval = setInterval(() => {
    timeLeft--;
    timeLeftSpan.textContent = timeLeft;

    // Flash yellow on new level start (when time = seconds)
    if (timeLeft === seconds - 1) {
      timerEl.style.animation = 'flashYellow 1s ease';
    }
    // Flash red when <= 3 seconds left
    if (timeLeft <= 3 && timeLeft > 0) {
      timerEl.style.animation = 'flashRed 1s ease';
    }

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      gameOver("הזמן נגמר! המשחק התחיל מחדש.");
    }
  }, 1000);
}

function handleUserClick(div, icon) {
  if (icon === order[userStep]) {
    div.classList.add('correct');
    userStep++;
    score += 10;
    scoreSpan.textContent = score;

    // Pulse animation on correct click
    div.animate([
      { transform: 'scale(1)', backgroundColor: '#c8facc' },
      { transform: 'scale(1.2)', backgroundColor: '#4caf50' },
      { transform: 'scale(1)', backgroundColor: '#c8facc' }
    ], { duration: 300, easing: 'ease' });

    if (userStep === order.length) {
      clearInterval(countdownInterval);
      alert('כל הכבוד! עוברים לשלב הבא!');
      level++;
      levelSpan.textContent = level;
      startLevel();
    }
  } else {
    div.classList.add('incorrect');
    gameOver('טעית! המשחק התחיל מחדש.');
  }
}

function gameOver(message) {
  alert(message);
  level = 1;
  score = 0;
  scoreSpan.textContent = score;
  levelSpan.textContent = level;
  startBtn.style.display = 'block';
  gameContainer.innerHTML = '';
  showingOrder = true;
  clearInterval(countdownInterval);
}

function startLevel() {
  showingOrder = true;
  userStep = 0;
  order = icons.slice(0, level);
  levelSpan.textContent = level;
  renderOrderWithNumbers(order);

  // משך זמן לזכור עולה עם הרמה: 4 שניות + חצי שניה * רמה
  const rememberTime = 4 + level * 0.5;

  setTimeout(() => {
    showingOrder = false;
    renderShuffled(order);
    startTimer(level + 5); // זמן כולל - עולה עם הרמה
  }, rememberTime * 1000);
}

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  startLevel();
});
