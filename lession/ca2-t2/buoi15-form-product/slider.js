let vt = 0;
window.addEventListener('load', function(event){
  const listSlider = document.getElementsByClassName('item');
  const sizeSlider = listSlider.length;
  listSlider[vt].classList.add("active-slider")

  function removeSliderActive () {
    for (let i = 0; i < sizeSlider; i++) {
      listSlider[i].classList.remove("active-slider")
    }
  }
  document.getElementById('preSlider').addEventListener('click', function(event){
    if(vt < 1) {
      vt = sizeSlider
    }
    removeSliderActive()
    listSlider[vt].classList.add("active-slider")
    vt --
    
  })
  
  document.getElementById('nextSlider').addEventListener('click', function(event){
    if(vt > sizeSlider-1) {
      vt = 0
    }
    removeSliderActive()
    listSlider[vt].classList.add("active-slider")
    vt++;
   
  })

})

