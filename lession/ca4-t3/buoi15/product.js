

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
                <td><img src="${item.image}" width="300px"/></td>
                <td>
                  <button type="button" class="btn btn-primary"
                  onClick="onEdit(${item.id})"
                   >edit</button>
                  <button type="button" class="btn btn-danger" onClick="onRemove(${item.id})">remove</button>
                  <a href="./product-detail.html?id=${item.id}"/>view detail</a>
                </td>
              </tr>
      `
   }
    if(document.getElementById('tableBody')) {
      document.getElementById('tableBody').innerHTML = content
    }
   
 }
 renderTable(store.getProduct())
 document.getElementById('frmProductCreate') &&
  document.getElementById('frmProductCreate').addEventListener('submit', function(event){
   event.preventDefault();
   const id = document.getElementById('id').value;
   const name = document.getElementById('name').value;
   const description = document.getElementById('description').value;
   const image = document.getElementById('image').value;
   const price = document.getElementById('price').value;

   const error = validate({id, name, description, image, price})

  if(error.length>0) {
    document.getElementById('error').innerHTML = error.join('<br>')
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

 document.getElementById('frmProductEdit')&&
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

 function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

 function validate({id, name, description, image, price}) {
   let error = [];
  if(id === '' || isNaN(id)) {
    error.push('id is invalid')
  }
  if(name === '') {
    error.push('name is not empty')
  }
  if(price === '' || isNaN(price)) {
    error.push('price is invalid')
  }
  if(description === '') {
    error.push('description is invalid')
  }

  if(image === '' || !isValidURL(image)) {
    const extent = image.split('.').pop();  
    const allowImage = ['.jpg', '.jpeg', '.png'];
    if(!allowImage.includes(extent)) {
      error.push('image is not image link')
    }

  }
  return error;
 }

 document.getElementById('btn-sort-gia-tang').addEventListener('click', function() {
  store.sapXepTheoGia(true);
  store.save();
  renderTable(store.getProduct());
 })
 document.getElementById('btn-sort-gia-giam').addEventListener('click', function() {
  store.sapXepTheoGia(false);
  store.save();
  renderTable(store.getProduct());
 })