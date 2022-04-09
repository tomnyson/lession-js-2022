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

    getProduct() {
      return this.products
    }
 }
  
 store = new StoreProduct();
 
 store.getData()

 // them san pham

 function renderTable(products) {
   let content = ''
   for(let i = 0; i < products.length; i++) {
     const item = products[i];
      content += `
      <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.price}</td>
                <td>${item.image}</td>
                <td>
                  <button type="button" class="btn btn-primary"
                  onClick="onEdit(${item.id})"
                   >edit</button>
                  <button type="button" class="btn btn-danger" onClick="onRemove(${item.id})">remove</button>
                </td>
              </tr>
      `
   }
   document.getElementById('tableBody').innerHTML = content
 }
 renderTable(store.getProduct())
 document.getElementById('frmProductCreate').addEventListener('submit', function(event){
   event.preventDefault();
   const id = document.getElementById('id').value;
   const name = document.getElementById('name').value;
   const description = document.getElementById('description').value;
   const image = document.getElementById('image').value;
   const price = document.getElementById('price').value;

   if(name === '' || description === '' || price === '' || image === '' || id === '') {
     alert('điền đầy đủ thông tin')
     return
   }
   const product = new Product(id, name, price, description, image);
   const isCreate = store.add(product);
   if(isCreate) {
     alert('Thêm thành công')
     store.save();
     renderTable(store.getProduct())
   } else {
      alert('Thêm thất bại')
   }

 })

 document.getElementById('frmProductEdit').addEventListener('submit', function(event){
  event.preventDefault();
  const id = document.getElementById('prodId').value;
  const name = document.getElementById('prodName').value;
  const description = document.getElementById('prodDescription').value;
  const image = document.getElementById('prodImage').value;
  const price = document.getElementById('prodPrice').value;

  if(name === '' || description === '' || price === '' || image === '' || id === '') {
    alert('điền đầy đủ thông tin')
    return
  }
  const product = new Product(id, name, price, description, image);
  const isCreate = store.update(product);
  if(isCreate) {
    alert('Cập nhật thành công')
    store.save();
    renderTable(store.getProduct())
  } else {
     alert('Cập nhật thất bại')
  }

})


 function onRemove(id) {
  const confirmAction = confirm("bạn có muốn xoá product id: "+id);
  if (confirmAction) {
    const isRemove = store.remove(`${id}`);
    if(isRemove) {
      alert('Xoá thành công')
      store.save();
      renderTable(store.getProduct())
    } else {
      alert('Xoá thất bại')
    }
  }
 }

 function onEdit(id) {

  var myModal = new bootstrap.Modal(document.getElementById('modalProductEdit'), {
    keyboard: false
  })
  const product = store.getById(`${id}`);
  if(product) {
   document.getElementById('prodId').value = product.id;
   document.getElementById('prodName').value = product.name;
   document.getElementById('prodDescription').value = product.description;
   document.getElementById('prodImage').value = product.image;
  document.getElementById('prodPrice').value = product.price;
  }
  myModal.show();
 }