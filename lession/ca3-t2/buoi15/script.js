window.addEventListener('load', function(event) {
  /**
   * lấy class
   */
  const sliders = document.getElementsByClassName('mySlides')
  let vt = 0;
  sliders[0].classList.add('slider-active')
  const size = sliders.length
  // const sliders = document.querySelectorAll('.mySlides')
  console.log('slider', size)
  function removeSliderActive() {
    for (let i = 0; i < size; i++) {
      sliders[i].classList.remove('slider-active')
    }
  }
  document.getElementById('btnNext').addEventListener('click', function(event) {
    vt++;
    if(vt >= size) {
      vt= 0
    }
    removeSliderActive()
    sliders[vt].classList.add('slider-active')
  })

  document.getElementById('btnPrev').addEventListener('click', function(event) {
    vt--;
    if(vt < 0) {
      vt= size-1
    }
    removeSliderActive()
    sliders[vt].classList.add('slider-active')
  })
})