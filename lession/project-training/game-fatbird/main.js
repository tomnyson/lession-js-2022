// get canvas
const canvas = document.getElementById("gameZone");
const context = canvas.getContext("2d");
const scoreShow = document.getElementById("score");

// create Icon Plappy bird

const imgBird = new Image();
const backgroundMain = new Image();
const pipeTop = new Image();
const pipeBottom = new Image();

// găn src cho image vừa create
imgBird.src = "images/bird.png";
backgroundMain.src = "images/nenchinh.png";
pipeTop.src = "images/ongtren.png";
pipeBottom.src = "images/ongduoi.png";

// nạp hình và tạo biến lưu điểm

let score = 0;
// khoảng cách đến hai ống
let distance2Pipe = 120;
let distance2PipeTop = 120;
let distance2PipeBottom = 120;

// tạo object chim và toạn độ là một nữa canvas
const bird = {
  x: backgroundMain.width / 5,
  y: backgroundMain.height / 2,
};
let pipe = [];

pipe[0] = {
  x: canvas.width,
  y: 0, // khởi tạo ống đầu tiên bên phải ngoài cùng
};

// load game đầu tiên

function run() {
  // context load hình
  context.drawImage(backgroundMain, 0, 0);
  context.drawImage(imgBird, bird.x, bird.y);
  // cho chim rơi xuống
  for (let i = 0; i < pipe.length; i++) {
    distance2PipeBottom = pipeTop.height + distance2Pipe;
    context.drawImage(pipeTop, pipe[i].x, pipe[i].y);
    // vẽ ông trên
    context.drawImage(pipeBottom, pipe[i].x, pipe[i].y + distance2PipeBottom);
    // random ống
    pipe[i].x -= 5; //để ống di chuyển
    // thêm ống khi ông di chuyển đến giữa
    if (pipe[i].x == canvas.width / 2) {
      pipe.push({
        x: canvas.width,
        y: Math.floor(Math.random() * pipeTop.height) - pipeTop.height,
      });
    }
    if (pipe[i].x == 0) pipe.splice(0, 1);
    if (pipe[i].x == bird.x) score++;
    // xử lý thua
    if (
      bird.y + imgBird.height == canvas.height ||
      (bird.x + imgBird.width >= pipe[i].x &&
        bird.x <= pipe[i].x + pipeTop.width &&
        (bird.y <= pipe[i].y + pipeTop.height ||
          bird.y + imgBird.height >= pipe[i].y + distance2PipeBottom))
    ) {
      return;
    }
  }

  // show điểm
  scoreShow.innerHTML = "score: " + score;
  bird.y += 3;
  // load các ống lên

  requestAnimationFrame(run);
}
// thêm func cho lên
document.addEventListener("keydown", function () {
  bird.y -= 60;
});
run();
