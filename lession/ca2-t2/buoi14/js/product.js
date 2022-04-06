class Product {
  constructor(id, name, price, description, image) {
    this.id=  id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}
 class StoreProduct {
   constructor() {
      this.products = [];
   }
    add(product) {
      for(let i = 0; i < this.products.length; i++) {
        const currentProduct = this.products[i];
        if(currentProduct.id === product.id) {
          return false
        }
      }
      this.products.push(product)
    }
    update(product) {
      let vt = -1;
      for(let i = 0; i < this.products.length; i++) {
        const currentProduct = this.products[i];
        if(currentProduct.id === product.id) {
          vt = i;
        }
      }
      //c1 
      if(vt !== -1) {
        // this.products[vt] = product;
        // remove product
        this.products.splice(vt, 1, product)
        // this.products.push(product)
        return true
      }
      return false
    }
    remove(id) {
      for(let i = 0; i < this.products.length; i++) {
        const currentProduct = this.products[i];
        if(currentProduct.id === id) {
          this.products.splice(i, 1)
          return true
        }
      }
      return false
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

    getProduct() {
      return this.products
    }
 }
  
const storeProduct = new StoreProduct();
const product1 = new Product(1, 'Iphone',10000000, 'iphone',
 'https://cdn.tgdd.vn/Products/Images/42/217942/iphone-x-64gb-1-400x460.png')

 const product2 = new Product(1, 'IphoneX',12000000, 'iphone',
 'https://cdn.tgdd.vn/Products/Images/42/217942/iphone-x-64gb-1-400x460.png')

 storeProduct.add(product1)

 console.log(storeProduct)
 storeProduct.update(product2)
 console.log(storeProduct)
 storeProduct.remove(1)
// cap nhat


 console.log(storeProduct)