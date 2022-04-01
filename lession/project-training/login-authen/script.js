class User {
  constructor(name, email, password, role) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
  xuatThongTin() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
    console.log(`Role: ${this.role}`);
  }
}
class UserList  {
  constructor() {
    this.users = [];
  }
  addUser(user) {
    this.users.push(user);
  }
  getListUsers() {
    return this.users
  }
  getLogin(username, password) {
    let user = this.users.find(user => user.email === username && user.password === password);
    return user;
  }
  saveListUser() {
    let data = JSON.stringify(this.users);
    localStorage.setItem('users', data);
  }
  getListUser() {
    let data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data);
    }
  }
}

const user1 = new User('Nguyen Van A', 'admin@gmail.com', '123456', 'admin');
const user2 = new User('Nguyen Van A', 'admin@gmail.com', '123456', 'admin');
const userList = new UserList();
userList.addUser(user1);
userList.addUser(user2);

for(const user of userList.getListUsers()) {
  // user.xuatThongTin()
}
console.log(userList.getLogin('admin@gmail.com', '123456'))
console.log(userList.getListUsers());
userList.saveListUser();
// document.querySelector('#registerForm').addEventListener('submit', function(event) {
//   event.preventDefault();
//   const formData = new FormData(document.querySelector('#registerForm'))
//   const obj = {}
//   for (var pair of formData.entries()) {
//     obj[pair[0]] = pair[1]
//   }
//   console.log(obj)

// })