//BildSlider
let sliders = document.querySelectorAll('._swiper')
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index]
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index]
					el.classList.add('swiper-slide')
				}
			}
			let slider_content = slider.innerHTML
			let slider_wrapper = document.createElement('div')
			slider_wrapper.classList.add('swiper-wrapper')
			slider_wrapper.innerHTML = slider_content
			slider.innerHTML = ''
			slider.appendChild(slider_wrapper)
			slider.classList.add('swiper-bild')

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div')
				sliderScroll.classList.add('swiper-scrollbar')
				slider.appendChild(sliderScroll)
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback()
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll')
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index]
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar')
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false,
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		})
		sliderScroll.scrollbar.updateSize()
	}
}

function sliders_bild_callback(params) { }

if (document.querySelector('.purchase')) {
	let purchaseSlider = new Swiper('.purchase__slider', {
		// effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		observer: true,
		observeParents: true,
		slidesPerView: 2,
		spaceBetween: 20,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		//pagination: {
		//	el: '.slider-quality__pagging',
		//	clickable: true,
		//},
		// Arrows
		// navigation: {
		//     nextEl: '.about__more .more__item_next',
		//     prevEl: '.about__more .more__item_prev',
		// },

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 480px
			1050: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is >= 640px

		},

		on: {
			lazyImageReady: function () {
				ibg()
			},
		},
		// And if we need scrollbar
		scrollbar: {
			el: '.purchase__swiper-scrollbar',
			draggable: true,
		},
	})
}

const rangeItems = document.querySelectorAll('[data-range]');
if (rangeItems.length) {

	const rangeItems = document.querySelectorAll('[data-range-item]')
	const fromValue = document.querySelector('[data-range-from]');
	const toValue = document.querySelector('[data-range-to]');
	const inputs = [fromValue, toValue]

	rangeItems.forEach((rangeItem) => {
		const item = document.querySelector('[data-range-item]');
		noUiSlider.create(rangeItem, {
			start: [(Number(fromValue.value)), Number(toValue.value)],
			connect: true,
			tooltips: [true, true],
			range: {
				min: [Number(fromValue.dataset.rangeFrom)],
				max: [Number(toValue.dataset.rangeTo)],
			},
		})
		item.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = Math.round(values[handle])
		})

		const setRangeSlider = (i, value) => {
			let arr = [null, null]
			arr[i] = value
			item.noUiSlider.set(arr)
		}

		inputs.forEach((input, index) => {
			input.addEventListener("change", function (e) {
				setRangeSlider(index, e.currentTarget.value)
			});
		});
	})
}
