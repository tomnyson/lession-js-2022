window.addEventListener('load', function(event){
  // lấy id từ url query string
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id');
  // lay id roi lam gi ?
  const product = store.getById(id);
  if(product) {
    document.getElementById('image').src = product.image
    document.getElementById('name').innerText = product.name;
    document.getElementById('price').innerText = product.price;
    document.getElementById('description').innerText = product.description;
  }
  

})