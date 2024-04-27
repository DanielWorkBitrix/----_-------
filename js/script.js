window.addEventListener('scroll', (e) => {
	let topOffset = window.scrollY;
	if (topOffset > 150) {
		document.querySelector('header').classList.add('scrolled');
	} else {
		document.querySelector('header').classList.remove('scrolled');
	}
})