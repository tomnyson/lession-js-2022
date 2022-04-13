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
      return true
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
    getById(id) {
      for(let i = 0; i < this.products.length; i++) {
        const currentProduct = this.products[i];
        if(currentProduct.id == id) {
          return currentProduct
        }
      }
      //c1 
      return null
    }
    remove(id) {
      console.log(this.products)
      for(let i = 0; i < this.products.length; i++) {
        const currentProduct = this.products[i];
        if(currentProduct.id == id) {
          this.products.splice(i, 1)
          return true
        }
      }
      return false
    }
    save() {
        if(this.products.length > 0) {
          const data = JSON.stringify(this.products)
          localStorage.setItem('products', data)
        }
    }
    getData() {
      const data = JSON.parse(localStorage.getItem('products'))
      if(data) {
        const listProduct = []
        for(let i =0; i < data.length; i++) {
          const user = new Product(data[i].id, data[i].name, data[i].price, data[i].description, data[i].image)
          listProduct.push(user)
        }
        this.products = listProduct
      }
    }
    sapXepGia(type = true) {
      // true || false  tăng || giảm
      if(type) {
        // tăng dần
        this.products.sort((a, b) => a.price - b.price)
        return 
      }
      else {
        // giảm dần
        this.products.sort((a, b) => b.price - a.price)
        return 
      }
    }
    getProduct() {
      return this.products
    }
 }
  
 store = new StoreProduct();
 
 store.getData()
