
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
       <td><img src="${item.image}" width="200px"/></td>
       <td>
      <span onclick ="onEdit(${item.id})"><i class="fa-regular fa-pen-to-square"></i></span>
      <span onclick ="onRemove(${item.id})"><i class="fa-regular fa-trash-can"></i></span>
      <a href="./product-detail.html?id=${item.id}">xem</a>
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

document.getElementById('btn-tang').addEventListener('click', function(event){
  store.sapXepGia(true);
  store.save();
  renderView()
})

document.getElementById('btn-giam').addEventListener('click', function(event){
  store.sapXepGia(false);
  store.save();
  renderView()
})