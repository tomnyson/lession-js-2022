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
        return true
      }
    }
    return false
  }
  getListUser(){
    return this.users
  }
  save() {
    if(this.users.length >0) {
      const convertArrayToObj = JSON.stringify(this.users)
      localStorage.setItem('users', convertArrayToObj)
    }
  }
  getData() {
    const data = localStorage.getItem('users')
    if(data) {
       const arrUser = JSON.parse(data)
       const listUser = []
       for(let i=0;i<arrUser.length;i++){
         const userTemp = new User(arrUser[i].name, arrUser[i].username, arrUser[i].password, arrUser[i].email, arrUser[i].role)
         listUser.push(userTemp);
       }
       this.users = listUser
    }
  }

}
// handle UI
const store = new StoreUser()
// lấy data từ localstorage
store.getData()
console.log(store.getListUser())

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
  if(isLogin){
    alert('đăng nhập thành công')
  } else {
    alert('đăng nhập thất bại')
  }
})