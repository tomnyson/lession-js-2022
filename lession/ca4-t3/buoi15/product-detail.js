window.addEventListener('load', function(event) {
  // event
  // get id from url dùng để lấy id trừ url
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  const product  = store.getById(id);
  if(product) {
    document.getElementById('image').src = product.image
    document.getElementById('price').innerText = product.price
    document.getElementById('name').innerText = product.name
    document.getElementById('description').innerText = product.description
  }
})