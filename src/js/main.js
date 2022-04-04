/* eslint-disable no-console */
console.log('Hello world');
// import { Pagination } from "swiper";
import '/node_modules/swiper/swiper-bundle.min';

const swiper = new Swiper('.swiper', {
	loop: false,
	observer: true,
	observeParents: true,
	slidesPerView: 'auto',
	spaceBetween: 0,
	autoHeight: true,
	// Navigation arrows
	navigation: {
		nextEl: '.recently-works__button-next',
		prevEl: '.recently-works__button-prev',
	},
	breakpoints: {
		320: {
			spaceBetween: 30,
			autoHeight: true,
		},
		768: {
			spaceBetween: 30,
		},
		992: {
			spaceBetween: 30,
		},
		1268: {
			spaceBetween: 66,
		},
	},
});

(function burgerFunc() {
	const burgerItem = document.querySelector('.hamburger');

	burgerItem.addEventListener('click', () => {
		burgerItem.classList.toggle('is-active');
	});
})();
