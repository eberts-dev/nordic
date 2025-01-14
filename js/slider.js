const swiper = new Swiper('.sw1', {
	direction: 'horizontal',
	loop: true,
	fadeEffect: {
		crossFade: true,
	},
	speed: 900,
	effect: 'fade',
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

const swiper2 = new Swiper('.sw2', {
	direction: 'horizontal',
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 50,
	loop: true,
	breakpoints: {
		335: {
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				spaceBetween: 20,
				slidesPerView: 1,
			},
		},
		768: {
			slidesPerView: 'auto',
			centeredSlides: false,
			slidesPerView: 'auto',
			spaceBetween: 0,
		},
		1040: {
			slidesPerView: 'auto',
			centeredSlides: false,
			spaceBetween: 60,
		},
	},
})

const swiper3 = new Swiper('.sw3', {
	direction: 'horizontal',
	centeredSlides: false,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 500,
	navigation: {
		nextEl: '.sw3-button-next',
		prevEl: '.sw3-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 50,
		},
		480: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		1040: {
			centeredSlides: false,
			slidesPerView: 1,
			loop: true,
			spaceBetween: 500,
		},
	},
})
