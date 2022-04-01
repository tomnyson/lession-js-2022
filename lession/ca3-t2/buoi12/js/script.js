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
    let check = false;
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].getUsername() === user.getUsername()) {
        check = true;
        return;
      }else {
        this.users.push(user);
      }
    }
    if(!check) {
      this.users.push(user);
    }
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
  getListUsers() {
    return this.users
  }
}

const listUsers = new StoreUsers();
const user1 = new User('A', 'admin', '123456', 'admin@gmail.com', 'admin')
const user2 = new User('A', 'admin1', '123456', 'admin@gmail.com', 'admin')
listUsers.addUser(user1)
listUsers.addUser(user2)
// console.log(listUsers)
// console.log(listUsers.getListUsers())
console.log(listUsers.login('admin', '12345'))

// for(let i=0; i<listUsers.getListUsers().length; i++){
//   listUsers.getListUsers()[i].xuatThongTin()
// }
