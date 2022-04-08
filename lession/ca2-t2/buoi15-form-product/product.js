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

    getProduct() {
      return this.products
    }
 }
  
 store = new StoreProduct();
 
 store.getData()

 const renderView = () => {
    const listProduct = store.getProduct()
    let content = ''
    for (let index = 0; index < listProduct.length; index++) {
      const item = listProduct[index];
       content += `
       <tr>
       <td>${item.id}</td>
       <td>${item.name}</td>
       <td>${item.description}</td>
       <td>${item.price}</td>
       <td>${item.image}</td>
       <td>
         <button type="button" class="btn btn-primary" onclick ="onEdit(${item.id})">edit</button>
         <button type="button" class="btn btn-danger" onclick ="onRemove(${item.id})">remove</button>
       </td>
      </tr`      
    }
    document.getElementById('tableBody').innerHTML = content
 }

 renderView()
 document.getElementById('frmProductCreate') && document.getElementById('frmProductCreate').addEventListener('submit', function(e){
   e.preventDefault();
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;
    const value = document.querySelector('.btn-submit').value
    console.log('value', value)

    const product = new Product(id, name, price, description, image);
    store.add(product);
    store.save();
    renderView()
    console.log(store)

})
document.getElementById('btn-create').addEventListener('click', function(e){
  document.querySelector('.btn-submit').value = 'create'
})

function onRemove(id) {
  isRemove = store.remove(id)
  console.log(isRemove)
  if(isRemove) {
    alert('xoá thành công')
    renderView()
  } else {
    alert('xoá thất bại')
  }

}

function onEdit(id) {
  // isRemove = store.remove(id)
var myModal = new bootstrap.Modal(document.getElementById('frmProduct'), {
  keyboard: false
})
const product = store.getById(id)
if(product) {
  document.getElementById('name').value = product.name
  document.getElementById('id').value = product.id
  document.getElementById('id').setAttribute('disabled', 'disabled')
  document.getElementById('price').value = product.price
  document.getElementById('image').value = product.image
  document.getElementById('description').value = product.description
  document.querySelector('.btn-submit').textContent = 'Change'
  document.querySelector('.btn-submit').value = 'update'
    myModal.show()
}
  // if(isRemove) {
  //   alert('xoá thành công')
  //   renderView()
  // } else {
  //   alert('xoá thất bại')
  // }

}