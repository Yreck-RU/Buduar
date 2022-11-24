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
noUiSlider.create(noUiSliderOne, {
    start: 0,
    connect: true,
    range: {
        'min': 0,
        'max': 5000000
    }
});

let noUiSliderTwo = document.getElementById('noUiSliderTwo');
noUiSlider.create(noUiSliderTwo, {
    start: 0,
    connect: true,
    range: {
        'min': 0,
        'max': 500
    }
});


//==================================================================================