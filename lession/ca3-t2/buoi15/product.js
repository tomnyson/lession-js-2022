
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
    <td><img src="${item.image}" width="200px"/></td>
    <td>
      <button type="button" class="btn btn-primary" onclick="editItem(${item.id})">edit</button>
      <button type="button" class="btn btn-danger" onclick="removeItem(${item.id})">remove</button>
      <a href="./product-detail.html?id=${item.id}">xem</a>
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

document.getElementById('btn-tang').addEventListener('click', function(e) {
  store.sapXepGia(true);
  store.save();
  renderTable(store.getProduct());
})
document.getElementById('btn-giam').addEventListener('click', function(e) {
  store.sapXepGia(false);
  store.save();
  renderTable(store.getProduct());
})