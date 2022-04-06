class Product {
    constructor(id, name, price, image, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}

class StoreProduct {
  constructor() {
    this.products = []
  }
  addProduct(product) {
    /**
     * kt trung id
     */
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        return false
      }
    }
    this.products.push(product)
    return true
  }
  updateProduct(product){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        this.products[i] = product
        return true
      }
    }
    return false
  }

  removeProduct(id){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i,1)
        return true
      }
    }
    return false
  }

  getDetailById(id){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return this.products[i]
      }
    }
    return null
  }


  getListProduct() {
    return this.products
  }
}

const storeProduct = new StoreProduct()
const product1 = new Product(1, 'iphone', 20000000, 'link hinh', 'iphone')
const product2 = new Product(2, 'iphoneX', 24000000, 'link hinh', 'iphone')

storeProduct.addProduct(product1)
storeProduct.addProduct(product2)
const product3 = new Product(2, 'iphoneX updated', 10000000, 'link hinh', 'iphone')
// cap nhat
console.log('storeProduct',storeProduct)
console.log(storeProduct.updateProduct(product3))
console.log('storeProduct update',storeProduct)
// remoev
console.log('storeProduct remove',storeProduct.removeProduct(1))

console.log('after remove',storeProduct)
console.log('after remove',storeProduct.getDetailById(1))