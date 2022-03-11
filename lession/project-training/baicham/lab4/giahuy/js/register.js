function register() {
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var ten = document.getElementById('ten').value;

  if(email === "") {
    alert('Nhập email của bạn !!!')
		return false;
	}else if (ten === ""){
    alert('Nhập tên của bạn !!!')
		return false;
  }else if (password === ""){
    alert('Nhập mật khẩu!!!')
		return false;
  }else{
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('ten', ten);
    alert('Đăng Ký Thành Công.');
    return true;
  }
}
function DangNhap() {
  var userName = document.getElementById('uremail').value;
  var userPw = document.getElementById('urpassword').value;

  var storedName = localStorage.getItem('email');
  var storedPw = localStorage.getItem('password');

  if(userName == storedName && userPw == storedPw) {
    alert('Đăng Nhập Thành Công.');
  }else {
    alert('Sai Tài Khoản hoặc mật khẩu.');
  }
}