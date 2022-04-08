 
window.addEventListener('DOMContentLoaded', function(e){
  console.log('go here')
 const userLogin = store.parseUser()
   if(userLogin) {
     if(userLogin.role === 'admin') {
  document.getElementById('username').innerHTML =`Username: ${userLogin.username}`       // admin page
     document.getElementById('name').innerHTML =`Username: ${userLogin.name}`       // admin page
      
      document.getElementById('email').innerHTML =`email: ${userLogin.name}`
      document.getElementById('password').innerHTML =`password: ******`
      document.getElementById('role').innerHTML =`role: ${userLogin.role}  `
    }
    
    } else {
      window.location.href = './login.html'
    }
    /**
      * trường hợp user -> user page
      * trường hợp admin -> admin page
      */
  })