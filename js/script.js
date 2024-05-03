window.addEventListener('scroll', (e) => {
	let topOffset = window.scrollY;
	if (topOffset > 150) {
		document.querySelector('header').classList.add('scrolled');
	} else {
		document.querySelector('header').classList.remove('scrolled');
	}
})
let menu_btn = document.querySelector('.hamburger');

menu_btn.addEventListener('click', () => {
	let ul = document.querySelector('ul');
	let li = document.querySelector('li');

	function hasClass(el, clss) {
		return el.classList.contains(clss);
	}
	if (menu_btn.classList.contains("is-active")) {
		if(window.innerWidth > 361) {
			ul.style.top = '-240px';
		}else {
			ul.style.top = '-45%';
		}
		menu_btn.classList.remove('is-active');


	} else {
		menu_btn.classList.add('is-active');
		ul.style.top = '80px';

		ul.addEventListener('click', () => {
			if(window.innerWidth > 361) {
				ul.style.top = '-240px';
			}else {
				ul.style.top = '-45%';
			}
			menu_btn.classList.remove('is-active');

		});
	}
});