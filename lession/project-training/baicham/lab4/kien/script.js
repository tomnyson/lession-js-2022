const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    
        
    

    // if(!exist){
    //     formData.push({ fname, lname, email, pwd });
    //     localStorage.setItem('formData', JSON.stringify(formData));
    //     document.querySelector('form').reset();
    //     document.getElementById('fname').focus();
    //     alert("Đăng Ký Thành Công.\n\nNhớ ghi vào giấy . Tránh quên !");
    // }
    // else{
    //     alert("Ô mai gót ! Tài Khoản trùng rồi");
    // }

    if(fname.length <2 ){
        alert("Quá ít ký tự ở Họ ");
    }else if (lname.length <2) {
        alert("Quá Ít Ký tự ở tên");
    }else if(email.length == 0) {
        alert("Ít nhất có 5 ký tự và có @gmail.com");   
    }else if(pwd.length <= 5) {
        alert("Mật Khẩu Có ít nhất 5 ký tự");   
    }else if(pwd.length ==0 && fname.length == 0 && lname.length == 00 && email.length == 0) {
        alert("Nhập gì đi chứ ");  
    }else {
        let formData = JSON.parse(localStorage.getItem('formData')) || [];

        let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

        if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Đăng Ký Thành Công.\n\nNhớ ghi vào giấy . Tránh quên !");
    }
    else{
        alert("Ô mai gót ! Tài Khoản trùng rồi");
    }
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Gòi Xong ! Sai tài khoản hoặc mật khẩu rồi ");
    }
    else{
        alert("Oh Yeah ! Đăng Nhập Được rồi ");
        addProduct()
        // chuyentab()
    }
    e.preventDefault();
}

		function addProduct() {
			let ten = document.getElementById('email').value;
			let mk = document.getElementById('pwd').value;

            let product = {
				'gmail': ten,
				'pwd': mk
            }

            document.getElementById('result').innerHTML += `<tr>
						<td>${ten}</td>
						<td>${mk}</td>
                        </tr>`
        }

        // function chuyentab(){
        //     <p  href="signup.html"></p>
        // }