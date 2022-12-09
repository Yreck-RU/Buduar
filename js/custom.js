function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
//Бургер ===========================================================================
const iconMenu = document.querySelector('._menu__icon');
const menuBody = document.querySelector('._menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
//==================================================================================

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

var swiperTwo = new Swiper(".buduar-home-suggestions-content", {
	//cssMode: true,
	slidesPerView: 1,
	spaceBetween: 50,
	navigation: {
		//nextEl: ".swiper-button-next",
		//prevEl: ".swiper-button-prev",
		prevEl: ".buduar-home-suggestions-content__button_left",
		nextEl: ".buduar-home-suggestions-content__button_right",
	},
	pagination: {
		el: ".buduar-home-suggestions-content__paginachion",
		clickable: true,
	},
	//mousewheel: true,
	//keyboard: true,
	breakpoints: {
		319.1: {
			allowTouchMove: true,
			autoHeight: true,
		},
		767.1: {
			allowTouchMove: false,
			//autoHeight: false,
		},
	},
});

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

// Убирания плэйсхолдера при фокусе ---------------------------------------------------------------------------------

const Forms =  document.querySelectorAll('._input-placeholder');

if (Forms) {
	for (let i = 0; i < Forms.length; i++) {
		let Form = Forms[i];
		let FormPlaceholder = Form.placeholder;

		Form.addEventListener("focus", function (e) {
			Form.placeholder = "";
		});
		Form.addEventListener("blur", function (e) {
			Form.placeholder = FormPlaceholder;
		});
	}
}

// Убирания плэйсхолдера при фокусе ---------------------------------------------------------------------------------


// Язык в шапке ---------------------------------------------------------------------------------

const LangvigButton =  document.querySelector('.index-block-eng__header');
const LangvigWrapper =  document.querySelector('.index-block-eng');
const LangvigBody =  document.querySelector('.index-block-eng__wrapper');

if (LangvigButton) {
	LangvigButton.addEventListener( 'click', (e) => {
		LangvigWrapper.classList.toggle('_active');
	});
	document.addEventListener( 'click', (e) => {
		let withinBoundaries = e.composedPath().includes(LangvigBody);
		let withinBoundaries2 = e.composedPath().includes(LangvigButton);

		if ( ! withinBoundaries && ! withinBoundaries2) {
			LangvigWrapper.classList.remove('_active');
		}
	})
}

// Язык в шапке ---------------------------------------------------------------------------------

// Валидация ---------------------------------------------------------------------------------


const FormValidationWrappers =  document.querySelectorAll('._form-validation__wrapper');

if (FormValidationWrappers) {
	for (var i = 0; i < FormValidationWrappers.length; i++) {
		//alert(i);
		let FormValidationWrapper = FormValidationWrappers[i];
		let FormValidationButton =  FormValidationWrapper.querySelector('._form-validation__button'); //onclick="return false"
		let FormValidationBodys =  FormValidationWrapper.querySelectorAll('._form-validation__body');
		let FormValidationInputs =  FormValidationWrapper.querySelectorAll('._form-validation__input');

		FormValidationButton.addEventListener( 'click', (e) => {
			if (FormValidationInputs.length = FormValidationBodys.length) {
				let sum = 0;
				for (let i = 0; i < FormValidationBodys.length; i++) {
					let FormValidationInput = FormValidationInputs[i];
					let FormValidationBody = FormValidationBodys[i];

					//alert(FormValidationInput);
					if (FormValidationInput.getAttribute("type") === "checkbox") {
						if (FormValidationInput.checked === true) {

						} else {
							FormValidationInput.classList.add('error');
							FormValidationBody.classList.add('error');
							sum++;
						}
					} else {
						if (FormValidationInput.value) {

						} else if (false) {

						} else {
							FormValidationInput.classList.add('error');
							FormValidationBody.classList.add('error');
							sum++;
						}
					}
				}
				if (sum <= 0) {
					FormValidationWrapper.submit();
				}
			}
		});

		for (let i = 0; i < FormValidationInputs.length; i++) {
			let FormValidationInput = FormValidationInputs[i];
			
			FormValidationInput.addEventListener( 'click', (e) => {
				for (let i = 0; i < FormValidationBodys.length; i++) {
					let FormValidationInput = FormValidationInputs[i];
					let FormValidationBody = FormValidationBodys[i];

					FormValidationInput.classList.remove('error');
					FormValidationBody.classList.remove('error');
				}
			});
		}

	}
}

// Валидация ---------------------------------------------------------------------------------
