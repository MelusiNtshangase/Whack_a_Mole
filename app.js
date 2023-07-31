const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let currentTime = 60;
let timerId = null;
let hitPosition;

const randomSquare = function () {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  console.log(randomPosition);

  hitPosition = randomPosition.id;
};
randomSquare();

squares.forEach((square) => {
  square.addEventListener("mousedown", function () {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

const moveMole = function () {
  timerId = setInterval(randomSquare, 500);
};
moveMole();

const countDown = function () {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    currentTime = 0;
    timeLeft.textContent = currentTime;
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER!!! Your score is " + result);
  }
};

let countDownTimerId = setInterval(countDown, 1000);
