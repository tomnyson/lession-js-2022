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
      const currentList = this.users
      let check = false;
      for(let i = 0; i < currentList.length; i++) {
       console.log(currentList[i]) 
      }
    //   const user = currentList.find(currentUser =>
    //      currentUser.getUsername() ===username && currentUser.getPassword() === password)
    //   return user
    }

    getListUser() {
      return this.users
    }
 }
  const storeUsers = new StoreUsers();
  const user1 = new User('Nguyen Van A', 'nguyenvanA', '123456', 'admin@gmail.com', 'admin')
  const user2 = new User('Nguyen Van B', 'nguyenvanA', '123456', 'admin@gmail.com', 'admin')
  const isCreate1 = storeUsers.addUser(user1);
  const isCreate = storeUsers.addUser(user2);

  console.log(storeUsers.getListUser())
 const currentList = storeUsers.getListUser();
  for(let i=0; i < currentList.length; i++) {
    console.log(currentList[i].getUsername(  ))
  }

  console.log(storeUsers.login('nguyenvanA', '123456'));
  console.log(storeUsers.login('nguyenvanA', '1234'));