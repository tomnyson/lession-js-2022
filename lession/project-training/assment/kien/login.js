
const signUp = e => {
  let name = document.getElementById('name').value,
      email = document.getElementById('email').value,
      pwd = document.getElementById('pwd').value;

  

  if(pwd.length ==0 && name.length == 0 && email.length == 0){
      alert("Nhập gì đi chứ ");
  }else if(name.length <5 || name.length > 20) {
    alert("Tên phải trên 5 ký tự và dưới 20 ký tự ");  
    // document.name.focus();
    // return false;
  }else if(email.length < 10) { 
      alert("Tài khoản phải có ít nhất 10 ký tự ");   
  }else if(pwd.length <= 5) {
      alert("Mật Khẩu Có ít nhất 5 ký tự");   
  }else {
      let formData = JSON.parse(localStorage.getItem('formData')) || [];

      let exist = formData.length && 
      JSON.parse(localStorage.getItem('formData')).some(data => 
          // data.fname.toLowerCase() == fname.toLowerCase() && 
          data.name.toLowerCase() == name.toLowerCase() &&
          data.email.toLowerCase() == email.toLowerCase()
      );

      if(!exist){
      formData.push({ name, email, pwd });
      localStorage.setItem('formData', JSON.stringify(formData));
      document.querySelector('form').reset();
      document.getElementById('name').focus();
      alert("Đăng Ký Thành Công.\n\nNhớ ghi vào giấy . Tránh quên !");
  }
  else{
      alert("Ô mai gót ! Tài Khoản trùng rồi");
  }
  }
  e.preventDefault();
}


function signIn(e) {
  let email = document.getElementById('email').value,
       pwd = document.getElementById('pwd').value;

       if(pwd.length ==0 && email.length == 0){
        alert("Nhập gì đi chứ ");
    } else{
      let formData = JSON.parse(localStorage.getItem('formData')) || [];
      let exist = formData.length && 
      JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
      if(!exist){
          alert("Gòi Xong ! Sai tài khoản hoặc mật khẩu rồi ");
      }
      else{
          alert("Oh Yeah ! Đăng Nhập Được rồi ");
          // addProduct()
          // chuyentab()
          location.href = './index.html'
          
      }
    }
  e.preventDefault();
}

