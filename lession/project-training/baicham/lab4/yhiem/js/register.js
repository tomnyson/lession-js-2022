function register() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;
  var repass = document.getElementById("repass").value;
  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");
  var repassError = document.getElementById("repassError");
  let listAccount = [];
  var user_pass = username + " | " + password;
  console.log("username is empty", username);
  if (username == "" || username == null || username == undefined) {
    usernameError.style.display = "block";
  } else {
    usernameError.style.display = "none";
    listAccount.push(user_pass);
  }
  if (
    password == "" ||
    password == null ||
    password == undefined ||
    password.length < 6
  ) {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
  if (
    repass == "" ||
    repass == null ||
    repass == undefined ||
    repass != password
  ) {
    repassError.style.display = "block";
  } else {
    repassError.style.display = "none";
  }

  if (username != "" && password != "" && repass != "" && repass == password) {
    localStorage.setItem("user_pass", listAccount);
    window.location.href = "formDangKi.html";
  }
}

function showPass() {
  var pass = document.getElementById("pass");
  var repass = document.getElementById("repass");
  if (pass.type == "password" && repass.type == "password") {
    pass.type = "text";
    repass.type = "text";
  } else {
    pass.type = "password";
    repass.type = "password";
  }
}
