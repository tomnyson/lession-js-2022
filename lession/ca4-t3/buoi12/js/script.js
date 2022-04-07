

document.getElementById('frmDangKy')&& document.getElementById('frmDangKy').addEventListener('submit', function(event){
  event.preventDefault();
  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value
  const email = document.getElementById('email').value;
  const role = document.getElementById('role').value;

  if(name === '' || username === '' || password === '' || email === '' || role === ''){
    alert('invalid value')
  } else {
    const user = new User(name, username, password, email, role)
    const isCreate = store.addUser(user)
    if(isCreate){
      alert('đăng ký thành công')
      store.save()
    } else {
      alert('username đã tồn tại')
    }
    console.log(isCreate)
 
  }
})

document.getElementById('frmDangNhap') && document.getElementById('frmDangNhap').addEventListener('submit', function(event){
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value
  if(username === '' || password === ''){
    alert('không được để trống')
    return
  }
  const isLogin = store.login(username, password)
  store.saveUser(isLogin)
  if(isLogin){
    if(isLogin.getRole() === 'admin') {
      // admin page
    window.location.href = './admin.html'
      alert('admin login')
    }
   
    /**
     * trường hợp user -> user page
     * trường hợp admin -> admin page
     */
  } else {
    alert('đăng nhập thất bại')
  }
})

/**
 * xư lý dashboard
 *  */

 