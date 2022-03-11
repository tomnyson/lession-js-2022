function infoUser() {
  var user = document.querySelector(".user_info");
  let user_info = "";

  let result = localStorage.getItem("user_pass");
  let user_pass = result.split(" | ");
  console.log("user_pass", user_pass);
  user_info += `<tr>
                  <td>1</td>
                  <td>${user_pass[0]}</td>
                  <td>${user_pass[1]}</td>
              </tr>`;

  user.innerHTML = user_info;
}

infoUser();
