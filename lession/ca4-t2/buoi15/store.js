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
      for(let i = 0; i < this.products.length; i++) {
        const currentProduct = this.products[i];
        if(currentProduct.id === product.id) {
          this.products[i] = product
          return true
        }
      }
      return false
    }
    getById(id) {
      for(let i = 0; i < this.products.length; i++) {
        const currentProduct = this.products[i];
        if(currentProduct.id === id) {
          return currentProduct
        }
      }
      //c1 
      return null
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
          const product = new Product(data[i].id, data[i].name, data[i].price, data[i].description, data[i].image)
          listProduct.push(product)
        }
        this.products = listProduct
      }
    }
    getProduct() {
      return this.products
    }
    sapXepGia(type = true){
      // true tang dần
      // false giảm dần
      if(type) {
        this.products.sort((a,b) => {return a.price -b.price})
      } else {
        this.products.sort((a,b) => {return b.price -a.price})
      }

    }
 }
 store = new StoreProduct();
 store.getData()
