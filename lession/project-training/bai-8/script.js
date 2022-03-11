const arrUser = [];
class Account {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  getUsername() {
    return this.username;
  }
  getPassword() {
    return this.password;
  }
}
const xuLyDangKy = () => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username !== "" && password !== "") {
    const userLocal = localStorage.getItem("users");
    if (userLocal) {
      const userList = JSON.parse(userLocal);
      const isFound = userList.find((user) => user.username === username);
      if (isFound) {
        alert("tài khoản đã tồn tại");
      }
      // check user -> localstorage
    } else {
      const userRegister = new Account(username, password);
      arrUser.push(userRegister);
      // create localStorage
      localStorage.setItem("users", JSON.stringify(arrUser));
      alert("đăng ký thành công");
    }
    // đăng ký
  } else {
    alert("username || password wrong");
  }
};

const xuLyDangNhap = () => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username !== "" && password !== "") {
    const userLocal = localStorage.getItem("users");
    if (userLocal) {
      const userList = JSON.parse(userLocal);
      const isFound = userList.find(
        (user) => user.username === username && user.password === password
      );
      if (isFound) {
        alert("đăng nhập thành công");
        location.href = "./dashboard.html";
      }
    } else {
      alert("ko tồn tại username || password");
    }
  } else {
    alert("username || password wrong");
  }
};
