/* eslint-disable no-console */
console.log("Hello world");
// import { Pagination } from "swiper";
import "/node_modules/swiper/swiper-bundle.min";

const swiper = new Swiper(".swiper", {
	loop: false,
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 0,
	autoHeight: true,
	// Navigation arrows
	navigation: {
		nextEl: ".recently-works__button-next",
		prevEl: ".recently-works__button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});
