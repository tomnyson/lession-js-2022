// form check function
function checkValidate() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");
  if (
    user == "" ||
    pass == "" ||
    user == null ||
    pass == null ||
    user == undefined ||
    pass == undefined ||
    pass.length < 6
  ) {
    usernameError.style.display = "block";
    passwordError.style.display = "block";
    return false;
  } else {
    usernameError.style.display = "none";
    passwordError.style.display = "none";
    return true;
  }
}
// login function save to local
function login() {
  let user_name, password;
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  if (checkValidate()) {
    let acc_user = localStorage.getItem("user_pass");
    console.log("acc_user", acc_user);
    if (acc_user == null) {
      alert("Tài khoản không tồn tại");
    }
    let result = acc_user.split(" | ");
    user_name = result[0];
    password = result[1];
    if (user == user_name && pass == password) {
      alert("Đăng nhập thành công");
      window.location.href = "infoUser.html";
    } else if (user != user_name) {
      alert("Tài khoản không tồn tại");
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
    console.log("result", result);
  }
}

// show password
function showPassword() {
  var pass = document.getElementById("pass");
  if (pass.type == "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}
