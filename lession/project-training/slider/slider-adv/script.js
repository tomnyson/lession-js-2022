

document.addEventListener("DOMContentLoaded", function(event) {
  let createSlider = document.querySelector('#my-custom-slider-demo');
	let createDiv = document.createElement('div');
	let createb = document.createElement('b');
	let createa = document.createElement('a');
	let createImg = document.createElement('img')
	createDiv.classList.add('widget_media_image')
	createb.classList.add('"widget-title')
	createb.textContent ="demo here"
	createImg.setAttribute('src', 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')
	createImg.setAttribute('width', 700)
	createImg.setAttribute('height', 200)
	createa.appendChild(createImg)
	createDiv.appendChild(createb);
	createDiv.appendChild(createa);
	createSlider.insertBefore(createDiv, createSlider.children[0]);
	// createSlider.appendChild(createDiv);



})

let currentSlide = 0, theSlides = document.getElementsByClassName('widget_media_image'), customSliderTimer, next, prev, theWrapper = document.getElementById('my-custom-slider-demo');


function customNavToNextSlide() {
	next = ( currentSlide < theSlides.length - 1 ) ? currentSlide + 1 : 0;
	customSetCurrentSlide(next);
}

function customNavToPrevSlide() {
	prev = ( currentSlide > 0 ) ? currentSlide - 1 : theSlides.length - 1;
	customSetCurrentSlide(prev);
}


function customSetCurrentSlide(to) {
	clearInterval(customSliderTimer);
	for (let i = 0; i < theSlides.length; i ++) {
		if ( currentSlide == i ) {
			theSlides[currentSlide].classList.remove('active');
		}
		if ( next == i ) {
			theSlides[to].classList.add('active');
		}
	}
	currentSlide = to;
	customSliderStart();
}
function customSliderStart() {
	customSliderTimer = setInterval(function() {
		customNavToNextSlide();
	}, 5000);
}
function customSliderInit() {
	let height = theSlides[0].getElementsByTagName('img')[0].height;
	theWrapper.style.height = height + 'px';
	for (let i = 0; i < theSlides.length; i ++) {
		theSlides[i].style.height = height + 'px';
	}
}
if (typeof theSlides !== 'undefined') {
	window.addEventListener('resize', customSliderInit);
	customSliderInit();
	if ( theSlides.length > 1 ) {
		customSliderStart();
	}
}