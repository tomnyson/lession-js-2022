// class object
class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
//create canvas

const canvas = document.getElementById("gameZone");
const context = canvas.getContext("2d");

// create speed run snake run;
let score = 0;

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

let headX = 10;
let headY = 10;
const snakeParts = [];
let tailLength = 2;

// tạo độ của rắn
let xVelocity = 0;
let yVelocity = 0;

// vẽ thức ăn
let appleX = 5;
let appleY = 5;

// create audio object
const sound = new Audio("./gulp.mp3");
//game loop

function drawGame() {
  changeSnakePosition();
  let result = isGameOver();

  if (result) return;

  clearScreen();

  checkAppleCollision();
  drawApple();
  drawSnake();

  drawScore();

  if (score > 5) {
    speed = 9;
  }

  if (score > 10) {
    speed = 22;
  }

  setTimeout(drawGame, 1000 / speed);
}

function isGameOver() {
  let gameOver = false;

  if (xVelocity === 0 && yVelocity === 0) {
    return false;
  }
  if (headX < 0) {
    // đụng tường
    gameOver = true;
  } else if (headX === tileCount) {
    gameOver = true;
  } else if (headY < 0) {
    gameOver = true;
  } else if (headY === tileCount) {
    gameOver = true;
  }

  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameOver = true;
      break;
    }
  }

  if (gameOver) {
    context.fillStyle = "white";
    context.font = "50px Verdana";

    var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", " magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // Fill with gradient
    context.fillStyle = gradient;

    context.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
  }
  return gameOver;
}

function clearScreen() {
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  context.fillStyle = "green";
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    context.fillRect(
      part.x * tileCount,
      part.y * tileCount,
      tileSize,
      tileSize
    );
  }
  snakeParts.push(new SnakePart(headX, headY)); //push item

  while (snakeParts.length > tailLength) {
    snakeParts.shift(); // remove further parts
  }

  context.fillStyle = "orange";
  context.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function drawScore() {
  context.fillStyle = "white";
  context.font = "10px Verdana";
  context.fillText("Score " + score, canvas.width - 50, 10);
}

function drawApple() {
  context.fillStyle = "red";
  context.fillRect(appleX * tileCount, appleX * tileCount, tileSize, tileSize);
}

const changeSnakePosition = () => {
  headX += xVelocity;
  headY += yVelocity;
};

const checkAppleCollision = () => {
  if (appleX === headX && appleY === headY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
    sound.play();
  }
};
const onKeyDown = (event) => {
  console.log("code", event.keyCode);
  // up
  if (event.keyCode == 38) {
    if (yVelocity == 1) return;
    yVelocity = -1;
    xVelocity = 0;
  }
  // down
  if (event.keyCode == 40) {
    if (yVelocity == -1) return;
    yVelocity = 1;
    xVelocity = 0;
  }
  // left
  if (event.keyCode == 37) {
    if (xVelocity == 1) return;
    yVelocity = 0;
    xVelocity = -1;
  }
  // right
  if (event.keyCode == 39) {
    if (xVelocity == -1) return;
    yVelocity = 0;
    xVelocity = 1;
  }
  // if key 32 space will restart game
  if (event.keyCode == 32) {
    if (isGameOver()) {
      location.reload();
    }
  }
};

document.body.addEventListener("keydown", onKeyDown);

drawGame();
