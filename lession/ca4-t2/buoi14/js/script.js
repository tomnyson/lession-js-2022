class User {
  constructor(name, username, password, email, role){
    this.name = name
    this.username = username
    this.password = password
    this.email = email
    this.role = role
  }
  getUserName() {
    return this.username
  }
  getRole() {
    return this.role
  }
  getPassword() {
    return this.password
  }
  xuatThongTin() {
    console.log(`Name: ${this.name} UserName: ${this.username} password: ${this.password}
    email: ${this.email} role: ${this.role}`)
  }
}

class StoreUser {
  constructor(){
    this.users = []
  }
  addUser(user){
    /**
     * kt trung username
     */
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].getUserName() === user.getUserName()){
        return false
      }
    }
    this.users.push(user)
    return true
  }
  login(username, password){
    /**
     * kt trung username
     */
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].getUserName() === username &&
       this.users[i].getPassword() === password){
        return this.users[i]
      }
    }
    return false
  }
  getListUser(){
    return this.users
  }
  save() {
    const data = JSON.stringify(this.users)
    localStorage.setItem('users', data)
  }
  restore() {
    const data = localStorage.getItem('users')
    if(data) {
      const listUsers = []
      const users = JSON.parse(data)
      for(let i=0;i<users.length;i++){
        const user = new User(users[i].name,
             users[i].username,
            users[i].password, 
            users[i].email,
             users[i].role)
          listUsers.push(user)
      }
      this.users = listUsers
    }
    
  }

}
const store = new StoreUser()
store.restore()
console.log('store', store)

// const user = new User('admin1', 'admin1', '123456','admin@gmail.com', 'admin');
// const user1 = new User('admin2', 'admin1', '123456','admin@gmail.com', 'admin');
// console.log(store.addUser(user));
// console.log(store.addUser(user1));

// user.xuatThongTin()
// console.log(store)
// console.log(store.login('admin1', '12345611'))
/************** XỬ LÝ UI */

// document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('frmDangKy') &&
   document.getElementById('frmDangKy').addEventListener('submit', function(event) {
    event.preventDefault()
    // validate form
    const name = document.getElementById('name').value
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const role = document.getElementById('role').value
    const user = {
      name: name,
      username: username,
      email: email,
      password: password,
      role: role
    }
    const user1 = new User(name, username, email, password, role)
    const isCreate = store.addUser(user1)
    console.log(store)
    if(!isCreate){
      alert('Tên đăng nhập đã tồn tại')
    } else {
      alert('Đăng ký thành công')
      store.save()
      window.location = "./login.html"
    }
    console.log(store.getListUser())
  })
  // xu ly dang nhap
  document.getElementById('frmDangNhap') && document.getElementById('frmDangNhap').addEventListener('submit', function(event){
    event.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    if(username === '' || password === '') {
      alert('nhập đầy đủ thông tin')
    } else {
      const isLogin = store.login(username, password)
      if(isLogin) {
        // admin || user
        alert('đăng nhập thành công')
        console.log(isLogin)
        if(isLogin.getRole() === 'admin') {
          window.location = "./admin.html"
        }else {
          window.location = "./user.html"
        }
      }
      console.log('login', isLogin)
    }
  })

