
window.addEventListener('load', function(event) {
  const sliders = document.getElementsByClassName('mySlides')
  console.log(sliders);
  let vt =0;
  const size = sliders.length;
  sliders[0].classList.add('slider-active')
  function removeActive() {
    for (let i = 0; i < sliders.length; i++) {
      sliders[i].classList.remove('slider-active')
    }
  }
  document.getElementById('btnPrev').addEventListener('click', function(e) {
    vt--;
    if(vt < 0) {
      vt = size - 1;
    }
    console.log('vt', vt);
    removeActive();
    sliders[vt].classList.add('slider-active')
  })
  
  document.getElementById('btnNext').addEventListener('click', function(e) {
    vt++;
    if(vt >= size) {
      vt = 0
    }
    removeActive();
    sliders[vt].classList.add('slider-active')
  })
  

})