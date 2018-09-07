const github = document.getElementById('sn-github');
const linkedin = document.getElementById('sn-linkedin');
const email = document.getElementById('sn-email');
const cv = document.getElementById('sn-cv');
const demoSalutem = document.getElementById('btn-demo-salutem');
const demoFoodmap = document.getElementById('btn-demo-foodmap');
const demoVisitor = document.getElementById('btn-demo-visitor');
const demoEdutic = document.getElementById('btn-demo-edutic');
const repoSalutem = document.getElementById('btn-repo-salutem');
const repoFoodmap = document.getElementById('btn-repo-foodmap');
const repoVisitor = document.getElementById('btn-repo-visitor');
const repoEdutic = document.getElementById('btn-repo-edutic');

email.addEventListener('click', () => {
	window.open('', '_blank');
});

cv.addEventListener('click', () => {
	window.open('https://drive.google.com/file/d/18uThgz23Ym77bPXhyskluYvJqKICGzvh/view', '_blank');
});

github.addEventListener('click', () => {
	window.open('https://github.com/AnaflaviaDiaz', '_blank');
});

linkedin.addEventListener('click', () => {
	window.open('https://www.linkedin.com/in/anaflavia-diaz/', '_blank');
});

demoSalutem.addEventListener('click', () => {
	window.open('https://anaflaviadiaz.github.io/lim-2018-05-bc-core-am-socialnetwork/src/', '_blank');
});

demoFoodmap.addEventListener('click', () => {
	window.open('https://anaflaviadiaz.github.io/lim-2018-01-foodmap/', '_blank');
});

demoVisitor.addEventListener('click', () => {
	window.open('https://anaflaviadiaz.github.io/wework/src/', '_blank');
});

demoEdutic.addEventListener('click', () => {
	window.open('', '_blank');
});

repoSalutem.addEventListener('click', () => {
	window.open('https://github.com/AnaflaviaDiaz/lim-2018-05-bc-core-am-socialnetwork', '_blank');
});

repoFoodmap.addEventListener('click', () => {
	window.open('https://github.com/AnaflaviaDiaz/lim-2018-01-foodmap', '_blank');
});

repoVisitor.addEventListener('click', () => {
	window.open('https://github.com/AnaflaviaDiaz/wework', '_blank');
});

repoEdutic.addEventListener('click', () => {
	window.open('', '_blank');
});

document.addEventListener('DOMContentLoaded', function () {
	const elems = document.querySelectorAll('.parallax');
	const elemsImg = document.querySelectorAll('.materialboxed');
	M.Parallax.init(elems);
	M.Materialbox.init(elemsImg);
});
