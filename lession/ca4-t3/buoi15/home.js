window.addEventListener('load', function(event){
  function renderProduct() {
    const listProduct = store.getProduct();
    if(listProduct.length > 0) {
      let content = ""
      for(let i = 0; i < listProduct.length; i++) {
        const item = listProduct[i]
        content+=`
        <div class="col-md-3">
        <div class="card" style="width: 18rem;">
         <a href="./product-detail.html?id=${item.id}"> <img id="image" src="${item.image}" class="card-img-top" alt="..."></a>
          <div class="card-body">
            <h3 id="name" class="card-title">${item.name}</h3>
            <h5 id="price" class="card-price">${item.price}</h5>
            <p id="description" class="card-text">${item.description.substring(0,100)}...</p>
            <a href="#" class="btn btn-primary">buy product</a>
          </div>
        </div>
      </div>
        
        `
      }
      document.getElementById('listProduct').innerHTML = content
    }
  }
  renderProduct()
})