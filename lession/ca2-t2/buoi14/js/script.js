class User {
  constructor(name, username, password, email, role) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
  }
  getUsername() {
    return this.username;
  }
  getPassword() {
    return this.password;
  }
  setPassword(password) {
    this.password = password;
  }
  getRole() {
    return this.role
  }
  xuatThongTin() {
    console.log(`Name: ${this.name}`);
    console.log(`Username: ${this.username}`);
    console.log(`Password: ${this.password}`);
    console.log(`Email: ${this.email}`);
    console.log(`Role: ${this.role}`);
  }
}
 class StoreUsers {
   constructor() {
      this.users = [];
   }
    addUser(user) {
      console.log('user', user.getUsername())
      const currentList = this.users
      let check = false;
      //c1 find
      // const isExist = currentList.find(currentUser => currentUser.getUsername() === user.getUsername())
      // c2 filter
      // const isExist = currentList.filter(currentUser => currentUser.getUsername() === user.getUsername())
      //c3 findIndex
      const isExist = currentList.findIndex(currentUser => currentUser.getUsername() === user.getUsername())
      console.log('isExist',isExist)
      if(isExist === -1) {
        this.users.push(user);
        check = true;
        return check
      }
      return check
    }
    login(username, password) {
      for(let i = 0; i < this.users.length; i++) {
        const currentUser = this.users[i];
        if(currentUser.getUsername() === username 
        && currentUser.getPassword() === password) {
          return currentUser
        }
      }
      return null
    }
    save() {
        if(this.users.length > 0) {
          const data = JSON.stringify(this.users)
          localStorage.setItem('users', data)
        }
    }
    getData() {
      const data = JSON.parse(localStorage.getItem('users'))
      if(data) {
        const listUser = []
        for(let i =0; i < data.length; i++) {
          const user = new User(data[i].name,
             data[i].username,
              data[i].password, 
              data[i].email,
               data[i].role)
          listUser.push(user)
        }
        this.users = listUser
      }
    }

    getListUser() {
      return this.users
    }
    saveUser(user) {
      localStorage.setItem('auth', JSON.stringify(user))
    }
    parseUser() {
      const data = JSON.parse(localStorage.getItem('auth'))
      if(data) {
        const user = new User(data.name,
             data.username,
              data.password, 
              data.email,
               data.role)
        return user
      }
      return null
    }
 }
  const store = new StoreUsers();
  store.getData()
  console.log('store', store);
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

  // trường hợp đăng nhập

  const frmDangNhap = document.getElementById('frmDangNhap')
  
  frmDangNhap && frmDangNhap,addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value
    if(username === '' || password === ''){
      alert('nhập đầy đủ thông tin')
      return
    }
    const isCheck = store.login(username, password)
    if(isCheck){
      alert('đăng nhập thành công')
      store.saveUser(isCheck)
      if(isCheck.getRole() === 'admin'){
        window.location.href = './admin.html'
      }
    } else {
      alert('đăng nhập thất bại')
    }
    alert('login form')
  })
  // xử lý profile ở đây đợi page đã load xong trang web
window.addEventListener('load', function() {
    const currentUser = store.parseUser();
    console.log('name',currentUser)
      document.getElementById('username').innerHTML = `username: ${currentUser.getUsername()}`;
      document.getElementById('name').innerHTML = `name: ${currentUser.name}`;
      document.getElementById('email').innerHTML = `name: ${currentUser.email}`;
      document.getElementById('role').innerHTML = `name: ${currentUser.getRole()}`;
      document.getElementById('password').innerHTML = `password: *******`;
    console.log('currentUser',currentUser)
})