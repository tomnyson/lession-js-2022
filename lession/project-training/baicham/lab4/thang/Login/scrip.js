var Login = document.getElementById('btn_Login')
Login.addEventListener('click',() =>{
    var user = document.getElementById('userName')
    var pass = document.getElementById('passWord')
    var textResuilt = document.getElementById('sucess') 
    var arrDsTaiKhoan = JSON.parse(localStorage.getItem('DS NICK'))
    let isCheckAccount = false

    for(let i = 0 ; i < arrDsTaiKhoan.length ; i++){
        if(user.value.trim() == arrDsTaiKhoan[i].userName && pass.value == arrDsTaiKhoan[i].passWord){
            isCheckAccount = true
            break
        }else{
            isCheckAccount = false
        }
    }
    if(isCheckAccount){
        textResuilt.innerHTML = 'Đăng nhập thành công!'
        textResuilt.style.color = 'rgb(0, 255, 0)'
    }else{
        textResuilt.innerHTML = 'Tài khoản hoặc mật khẩu không chính xác!'
        textResuilt.style.color = 'red'
    }
})