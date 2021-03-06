/**
 * thông tin từ form
 * name, username, password, email, role
 */

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
    /**
     * tk tồn tại nếu có username thì không thêm vào
     */
    //c1
    console.log('this.users',this.users) 
  for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].getUsername() === user.getUsername()) {
      return false
    }
  }
    this.users.push(user);
    return true;
    //c2
    // const isExist = this.users.filter(currentUser => 
    //   currentUser.getUsername() === user.getUsername())
    //   console.log('isExist',isExist)
    //c3
      //  const isExist = this.users.find(currentUser => 
      // currentUser.getUsername() === user.getUsername())
      // console.log('isExist',isExist)
      
  }
  login(username, password) {
    let user = null;
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].getUsername() === username &&
      this.users[i].getPassword() === password
      ) {
        user = this.users[i];
      }
    }
    return user;
  }
  save() {
    // convert array obj ve strong => set key cho localstorate
    const users = JSON.stringify(this.users);
    localStorage.setItem('users', users);
  }
  getData() {
    const data = localStorage.getItem('users');
    if(data) {
      // covert data
      const userList = JSON.parse(data);
      const arrUser = []
      // lấy lại class User
      console.log('userList',userList)
      for(let i = 0; i < userList.length; i++) {
        const user = new User(userList[i].name, userList[i].username, userList[i].password, userList[i].email, userList[i].role);
        arrUser.push(user);
      }
      this.users = arrUser
    }
  }
  getListUsers() {
    return this.users
  }
}
const store = new StoreUsers();
store.getData()
console.log(store)
document.getElementById('frmDangKy') &&
 document.getElementById('frmDangKy').addEventListener('submit', function(event){
  // ngăn chặn form load
  event.preventDefault()
  const name = document.getElementById('name').value
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  const email = document.getElementById('email').value
  const role = document.getElementById('role').value
  document.getElementById('error-name').innerHTML = ''

  if(name === '' || username === '' || role === '' || email === '' || password === '')  {
    alert('nhập đầy đủ thông tin')
  }
  // tạo ra một user mới
  const user = new User(name, username, password, email, role)
  //add user 
  const isCheck = store.addUser(user)
  if(isCheck) {
    alert('đăng nhập thành công')
    store.save()
  } else {
    alert('tài khoản đã tồn tại')
  }
})

// ham set
// localStorage.setItem('user', JSON.stringify({
//   username: 'ABC',
//   password: '123456'
// }))
// //get data
// console.log(JSON.parse(localStorage.getItem('user')))
// //remove
// localStorage.removeItem('user')

// dang Nhap




