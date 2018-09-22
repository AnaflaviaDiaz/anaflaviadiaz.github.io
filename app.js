const repoSalutem = 'https://github.com/AnaflaviaDiaz/lim-2018-05-bc-core-am-socialnetwork';
const repoFoodmap = 'https://github.com/AnaflaviaDiaz/lim-2018-01-foodmap';
const repoVisitor = 'https://github.com/AnaflaviaDiaz/wework';
const repoEdutic = 'https://github.com/AnaflaviaDiaz/lim-2018-01-social-network-frameworks';

const demoSalutem = 'https://anaflaviadiaz.github.io/lim-2018-05-bc-core-am-socialnetwork/src/';
const demoFoodmap = 'https://anaflaviadiaz.github.io/lim-2018-01-foodmap/';
const demoVisitor = 'https://anaflaviadiaz.github.io/wework/src/';
const demoEdutic = 'https://anaflaviadiaz.github.io/lim-2018-01-social-network-frameworks/my-app/login';

const linkLinkedln = 'https://www.linkedin.com/in/anaflavia-diaz/';
const linkGithub = 'https://github.com/AnaflaviaDiaz';
const linkCV = 'https://drive.google.com/file/d/1RZeXPyFhJYbmDWBR6km_6FYPbvzHrsZj/view';

const btnRepoSalutem = document.getElementById('btn-repo-salutem');
const btnRepoFoodmap = document.getElementById('btn-repo-foodmap');
const btnRepoVisitor = document.getElementById('btn-repo-visitor');
const btnRepoEdutic = document.getElementById('btn-repo-edutic');

const btnDemoSalutem = document.getElementById('btn-demo-salutem');
const btnDemoFoodmap = document.getElementById('btn-demo-foodmap');
const btnDemoVisitor = document.getElementById('btn-demo-visitor');
const btnDemoEdutic = document.getElementById('btn-demo-edutic');

const btnLinkedln = document.getElementById('linkedin');
const btnGithub = document.getElementById('github');
const btnCV = document.getElementById('cv');
const btnEmail = document.getElementById('gmail');

const openPage = (route) => {
  window.open(route, '_blank');
};

const sendEmail = () => {
  window.open('mailto:anaflaviadiazmartel5a@gmail.com');
}

btnRepoSalutem.addEventListener('click', () => openPage(repoSalutem));
btnRepoFoodmap.addEventListener('click', () => openPage(repoFoodmap));
btnRepoVisitor.addEventListener('click', () => openPage(repoVisitor));
btnRepoEdutic.addEventListener('click', () => openPage(repoEdutic));

btnDemoSalutem.addEventListener('click', () => openPage(demoSalutem));
btnDemoFoodmap.addEventListener('click', () => openPage(demoFoodmap));
btnDemoVisitor.addEventListener('click', () => openPage(demoVisitor));
btnDemoEdutic.addEventListener('click', () => openPage(demoEdutic));

btnLinkedln.addEventListener('click', () => openPage(linkLinkedln));
btnGithub.addEventListener('click', () => openPage(linkGithub));
btnCV.addEventListener('click', () => openPage(linkCV));
btnEmail.addEventListener('click', () => sendEmail());

document.addEventListener('DOMContentLoaded', function () {
  const sidenav = document.querySelectorAll('.sidenav');
  const scrollspy = document.querySelectorAll('.scrollspy');
  M.Sidenav.init(sidenav);
  M.ScrollSpy.init(scrollspy);
});
