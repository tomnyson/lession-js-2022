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
 }
 store = new StoreProduct();
 store.getData()

// them san pham
function renderTable(products) {
  let content = ''
  for (var i = 0; i < products.length; i++) {
    const item = products[i];
    content+=` <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.description}</td>
    <td>${item.price}</td>
    <td>${item.image}</td>
    <td>
      <button type="button" class="btn btn-primary" onclick="editItem(${item.id})">edit</button>
      <button type="button" class="btn btn-danger" onclick="removeItem(${item.id})">remove</button>
    </td>
  </tr>`
  }
  document.getElementById('tableBody').innerHTML = content
}
renderTable(store.getProduct())
document.getElementById('frmProductCreate').addEventListener('submit', function(e) {
  e.preventDefault();
  // lay du lieu tu form
  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value
  const price = document.getElementById('name').value
  const image = document.getElementById('image').value
  const description = document.getElementById('description').value

  if(id === '' || name === '' || price === '' || image === '' || description === '') {
    alert('điền đầy đủ thông tin')
    return
  } else {
    // new product
    const product = new Product(id, name, price, description, image)
    // add product
    const isAdd = store.add(product)
    if(isAdd) {
      alert('Thêm thành công')
      store.save()
      renderTable(store.getProduct())
    } else {
      alert('Thêm ko thành công')
    }
  }

})

function removeItem(id) {
  let text = `bạn muốn xoá product có id là ${id}`;
  if (confirm(text) == true) {
    const isRemove = store.remove(`${id}`)
    if(isRemove) {
      alert('Xoá thành công')
      store.save()
      renderTable(store.getProduct())
    }
  }
}

function editItem(id) {
  var myModal = new bootstrap.Modal(document.getElementById('modalEdit'), {
    keyboard: false
  })
  myModal.show()
  const product = store.getById(`${id}`)
  // biding data
  console.log('product',product.id)
  document.getElementById('productId').value = product.id;
  document.getElementById('productName').value = product.name;
  document.getElementById('productPrice').value = product.price
  document.getElementById('productImage').value = product.image
  document.getElementById('productDescription').value = product.description
}

document.getElementById('frmProductEdit').addEventListener('submit', function(e) {
  e.preventDefault();
  // lay du lieu tu form
  const id = document.getElementById('productId').value;
  const name = document.getElementById('productName').value
  const price = document.getElementById('productPrice').value
  const image = document.getElementById('productImage').value
  const description = document.getElementById('productDescription').value

  if(id === '' || name === '' || price === '' || image === '' || description === '') {
    alert('điền đầy đủ thông tin')
    return
  } else {
    // new product
    const product = new Product(id, name, price, description, image)
    // add product
    const isAdd = store.update(product)
    if(isAdd) {
      alert('update thành công')
      store.save()
      renderTable(store.getProduct())
    } else {
      alert('update ko thành công')
    }
  }

})