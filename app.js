document.addEventListener('DOMContentLoaded', function () {
	const elems = document.querySelectorAll('.parallax');
	const elemsImg = document.querySelectorAll('.materialboxed');
	M.Parallax.init(elems);
	M.Materialbox.init(elemsImg);
});
