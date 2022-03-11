// const xinChaoElm = document.getElementById("xinChao");
// console.log("xinChaoElm", xinChaoElm);
// console.log("nodeName", xinChaoElm.nextSibling);
// const getClass = document.getElementsByTagName("img");
// const getLink = document.getElementsByTagName("a");
// console.log("getClass", getClass);
// for (let i = 0; i < getClass.length; i++) {
//   console.log("link", getLink[0].getAttribute("href"));
//   if (i == 0) {
//     const src = getClass[i].getAttribute("src");
//     console.log("scr", src);
//   }
// }
// const getClass = document.querySelector("div.list");
// getClass.style.backgroundColor = "red";
// // for (let i = 0; i < getClass.length; i++) {
// //   console.log(getClass);
// // }

// function changeImage() {
//   const hinh = document.getElementsByClassName("hinh");
//   const link =
//   hinh[0].src = link;
// }

// trò chơi sổ số
// input cho người ta nhập vào một số từ số 0-100 (validate)
// random kết quả
// đặc biệt đoán đúng  => chiến thắng hình
// giải nhất : cách 5 số => giả 1 hình
// giải khuyến khích: cách 10 số => giả khuyến khích hình
// còn lại chưa trúng => hình không vui
const wins = [
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Ftop-1-best-podium-award-sign-golden-object-vector-28926229&psig=AOvVaw2LJ0EmZ6BiQi9SRe4yyno_&ust=1637920651437000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJj944ags_QCFQAAAAAdAAAAABAD",
  "https://png.pngtree.com/png-clipart/20210313/ourlarge/pngtree-3d-top-2-trophy-gold-png-image_3038881.jpg",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Ftop-podium-isolated-white-background-d-render-image140691486&psig=AOvVaw1BCHC_jbfd2bbDjxpZSJv9&ust=1637920702966000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCMpp-gs_QCFQAAAAAdAAAAABAD",
  "https://thumbs.dreamstime.com/z/you-can-not-win-unless-learn-how-to-lose-achieve-goal-success-business-motivational-quote-modern-typography-background-78990452.jpg",
];
function playGame() {
  event.preventDefault();
  const number = document.getElementsByName("soChon")[0].value;
  if (!isNaN(number) && Number(number) > 0 && Number(number) <= 100) {
    const random = Math.floor(Math.random() * 100);
    document.getElementById("ketQua").innerText = `Kết quả: ${random}`;
    document.getElementById("luachon").innerText = `Kết quả: ${number}`;

    const winner = document.getElementById("winner");
    const compare = Math.abs(Number(number) - random);
    if (compare == 0) {
      winner.innerHTML = `<img src="${wins[0]}"/>`;
    } else if (compare < 5) {
      winner.innerHTML = `<img src="${wins[1]}"/>`;
    } else if (compare < 10) {
      winner.innerHTML = `<img src="${wins[2]}"/>`;
    } else {
      winner.innerHTML = `<img src="${wins[3]}"/>`;
    }
  } else {
    alert("wrong value");
  }
  // lấy dữ liệu input => validate
  // random kết quả 0 - 100 Math.floor(Math.random() * 1000);
  // so sánh kết quả và show result
}

const testEvent = document.getElementById("testEvent");

if (testEvent) {
  testEvent.addEventListener("mouseover", function () {
    testEvent.style.background = "red";
  });
  testEvent.addEventListener("mouseout", function () {
    testEvent.style.background = "none";
  });
}

const xuLyTestForm = (event) => {
  event.preventDefault();
  const form = document.getElementsByName("favorite");
  const price = document.getElementsByName("price");
  const car = document.getElementsByName("cars");
  console.log("car", car[0].value);
  for (const item of form) {
    if (item.checked) {
      console.log("favorite", item.value);
    }
  }
  for (const item of price) {
    if (item.checked) {
      console.log("favorite", item.value);
    }
  }
};

const API = "https://61a1e06a014e1900176de79b.mockapi.io/test/blogs";
const httpXml = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajax").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", API, true);
  xhttp.send();
};

const httpFetch = async () => {
  const url = API;
  const response = await fetch(API);
  const names = await response.json();
  document.getElementById("ajax").innerHTML = JSON.stringify(names);
};
const fetchAPiTest = async () => {
  // cach 1 httpXML
  //httpXml();
  await httpFetch();
};

// envent

const txtUser = document.getElementById("txtUser");
if (txtUser) {
  // txtUser.addEventListener("keypress", function (event) {
  //   console.log("event", event.target.value);
  // });
  // txtUser.addEventListener("focus", function (event) {
  //   txtUser.style.background = "red";
  // });
}

const checkValidUsername = (event) => {
  console.log("e", event.target.value);
  if (event.target.value.length < 6) {
    document.getElementsByClassName("error-userName")[0].style.color = "red";
    document.getElementsByClassName("error-userName")[0].style.display =
      "block";
    document.getElementsByClassName("error-userName")[0].textContent =
      "username length >6";
    // alert("username length >6 ");
  }
};

const addListToDo = () => {
  const todo = document.getElementById("txtUser").value;
  const listTodo = document.getElementById("lstTodo");
  const liElm = document.createElement("li");
  const textNode = document.createTextNode(todo);
  liElm.appendChild(textNode);
  listTodo.appendChild(liElm);
};

/**
 *  create input => nhập liệu vào
 *  khi có dữ liệu -> create list note -> createElement/createTextNode/appendChild
 */
