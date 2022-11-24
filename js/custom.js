function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

// Настройка свайпера ==============================================================

const mediaQuery = window.matchMedia('(max-width: 767px)')
if (mediaQuery.matches) {
	var swiper = new Swiper(".benefits__wrapper", {
		slidesPerView: 2,
		grid: {
			rows: 2,
		},
		spaceBetween: 30,
		slidesPerGroup: 2,
		pagination: {
			el: ".benefits__paginachion",
			clickable: true,
		},
	});
}

//==================================================================================



// Настройка ползунков =============================================================

let noUiSliderOne = document.getElementById('noUiSliderOne');
let noUiSliderTwo = document.getElementById('noUiSliderTwo');

if (noUiSliderOne && noUiSliderTwo) {
	let sliderSumTeg = document.querySelector(".calculator-slider-sum__meaning_3");
	let sliderSum = 0;
	const inputSlider2 = document.querySelector(".calculator-slider-number__meaning_2");
	let inputSliderNumber2 = 0;
	const inputSlider = document.querySelector(".calculator-slider-number__meaning_1");
	let inputSliderNumber1 = 0;

	noUiSlider.create(noUiSliderOne, {
	    start: 0,
	    connect: true,
	    range: {
	        'min': 0,
	        'max': 5000000
	    }
	});

	noUiSliderOne.noUiSlider.on('update', function(values){
		inputSliderNumber1 = Math.floor(values);
		inputSlider.innerHTML = inputSliderNumber1;
		sliderSumTeg.innerHTML = inputSliderNumber1 * inputSliderNumber2;
	});

	noUiSlider.create(noUiSliderTwo, {
	    start: 0,
	    connect: true,
	    range: {
	        'min': 0,
	        'max': 500
	    }
	});

	noUiSliderTwo.noUiSlider.on('update', function(values){
		inputSliderNumber2 = Math.floor(values);
		inputSlider2.innerHTML = inputSliderNumber2;
		sliderSumTeg.innerHTML = inputSliderNumber1 * inputSliderNumber2;
	});
}


//==================================================================================