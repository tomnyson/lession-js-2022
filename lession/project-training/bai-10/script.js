/**
 *  create image array [5],
 *  index = 0,
 * onClick => nextSlider => index + 1 -> index > array.length -> index =0
 * onClick => nextSlider => index - 1 ->  index < array.length -> index = n
 */

const arrHinh = [
  "https://static2.yan.vn/YanNews/2167221/201807/dua-xe-hoat-hinh-car-o-disneyland-los-angeles-khien-cdm-thich-thu-8cfe674e.jpg",
  "https://static2.yan.vn/YanNews/2167221/201807/dua-xe-hoat-hinh-car-o-disneyland-los-angeles-khien-cdm-thich-thu-78d51b04.jpg",
  "https://static2.yan.vn/YanNews/2167221/201807/dua-xe-hoat-hinh-car-o-disneyland-los-angeles-khien-cdm-thich-thu-35fef479.PNG",
  "https://static2.yan.vn/YanNews/2167221/201807/dua-xe-hoat-hinh-car-o-disneyland-los-angeles-khien-cdm-thich-thu-2eddb00e.png",
];
let index = 0;

const changeHinh = () => {
  const hinhElm = document.getElementById("hinh");
  hinhElm.src = arrHinh[index];
};
const viewHinh = () => {
  const hinhElm = document.getElementById("hinh");
  hinhElm.style.opacity = "1";
  hinhElm.src = arrHinh[index];
};
const nextSlider = () => {
  if (index === arrHinh.length) {
    index = 0;
  }

  viewHinh();
  index++;
};

const prevSlider = () => {
  if (index == 0) {
    index = arrHinh.length;
  }
  index--;
  viewHinh();
  setTimeout(() => {
    alert("call view hinh");
  }, 3000);
};
window.addEventListener("load", () => {
  viewHinh();
  const matches = document.querySelectorAll("div.bauCua div.item");
  for (const item of matches) {
    item.addEventListener("click", function (e) {
      console.log("class", item.className);
      console.log('(item.className !== "active"', item.className !== "active");
      if (!item.classList.contains("active")) {
        item.classList.add("active");
      } else {
        console.log("remove");
        item.classList.remove("active");
      }
    });
  }

  console.log("item", matches);
});
// setInterval(() => {
//   nextSlider();
// }, 3000);

function sleep(ms) {
  // add ms millisecond timeout before promise resolution
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const waitingResult = () => {
  const matches = document.querySelectorAll("div.bauCua div.item");
  const random = Math.floor(Math.random() * matches.length);
  if (matches[random].classList.contains("active")) {
    matches[random].classList.remove("active");
  } else {
    matches[random].classList.add("active");
  }
};
const playGame = () => {
  const callInterval = setInterval(() => {
    waitingResult();
  }, 1000);
  setTimeout(() => {
    clearTimeout(callInterval);
    alert("will clear");
  }, 3000);
};
