function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Vui lòng điền vào email');

    }else if(pw.value.length == 0){
        alert('Vui lòng điền mật khẩu');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Vui lòng điền email và mật khẩu');

    }else if(pw.value.length > 8){
        alert('mật khẩu tối đa 8 ký tự');

    }else if(!pw.value.match(numbers)){
        alert('vui lòng thêm 1 số');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('vui lòng thêm 1 chữ cái in hoa');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('vui lòng thêm 1 chữ cái thường');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Tài khoản của bạn đã được tạo');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('Đăng nhập thành công');
    }else{
        alert('Đăng nhập thất bại');
    }
}