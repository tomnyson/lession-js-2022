
var arrDsTaiKhoan = JSON.parse(localStorage.getItem('DS NICK'))
var arrPerson = []
var errorUserName = document.getElementById('errorUsername')
var errorPassWord = document.getElementById('errorPass')
var errorAgainPassWord = document.getElementById('errorAgainPass')
var isCheckValue = true 
var logIn = document.getElementById('btn_Login')
var sucess = document.getElementById('sucess')
logIn.addEventListener('click', (e) => {
    var user = document.getElementById('userName')
    var pass = document.getElementById('passWord')
    var again_passWord = document.getElementById('again_passWord')
    var account = {
        userName: null,
        passWord: null,
    }
    sucess.innerHTML = ''

    if(user.value.trim() == ''){
        isCheckValue = false
        errorUserName.innerHTML = 'Tên tài khoản không được để trống!'
    }else if(user.value.trim().length <= 2){
        isCheckValue = false
        errorUserName.innerHTML = 'Tên tài khoản phải lớn hơn 2 kí tự!'
    }else{
        isCheckValue = true
        errorUserName.innerHTML = ''
    }
    for(let i = 0 ; i < arrPerson.length ; i++){
        if(arrPerson[i].userName == user.value.trim()){
        isCheckValue = false
        errorUserName.innerHTML = 'User này đã tồn tại!'
        }
    }

    if(pass.value.trim() == ''){
        isCheckValue = false
        errorPassWord.innerHTML = 'Mật khẩu không được để trống!'
    }else if(pass.value.trim().length <= 5){
        isCheckValue = false
        errorPassWord.innerHTML = 'Mật khẩu phải dài hơn 5 kí tự!'
    }else{
        errorPassWord.innerHTML = ''
    }
    if(pass.value.trim() != again_passWord.value.trim()){
        isCheckValue = false
        errorAgainPassWord.innerHTML = '2 mật khẩu không trùng nhau!'
    }else if(pass.value.trim().length == 0){
        errorAgainPassWord.innerHTML = ''
    }else{
        errorAgainPassWord.innerHTML = ''
    }
    
    if(isCheckValue){
        sucess.style.color = 'green'
        sucess.innerHTML = 'Đăng kí thành công'
        account = {
            userName: user.value,
            passWord: pass.value,
        }
        
        arrPerson.push(account)
        console.log(arrPerson)

        localStorage.setItem('DS NICK', JSON.stringify(arrPerson))
    }
    
})

