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

const btnRepoFoodmapMb = document.getElementById('btn-repo-foodmap-mobile');
const btnDemoFoodmapMb = document.getElementById('btn-demo-foodmap-mobile');
const btnRepoSalutemMb = document.getElementById('btn-repo-salutem-mobile');
const btnDemoSalutemMb = document.getElementById('btn-demo-salutem-mobile');
const btnRepoVisitorMb = document.getElementById('btn-repo-visitor-mobile');
const btnDemoVisitorMb = document.getElementById('btn-demo-visitor-mobile');
const btnRepoEduticMb = document.getElementById('btn-repo-edutic-mobile');
const btnDemoEduticMb = document.getElementById('btn-demo-edutic-mobile');

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

btnRepoSalutemMb.addEventListener('click', () => openPage(repoSalutem));
btnRepoFoodmapMb.addEventListener('click', () => openPage(repoFoodmap));
btnRepoVisitorMb.addEventListener('click', () => openPage(repoVisitor));
btnRepoEduticMb.addEventListener('click', () => openPage(repoEdutic));

btnLinkedln.addEventListener('click', () => openPage(linkLinkedln));
btnGithub.addEventListener('click', () => openPage(linkGithub));
btnCV.addEventListener('click', () => openPage(linkCV));
btnEmail.addEventListener('click', () => sendEmail());

btnDemoSalutemMb.addEventListener('click', () => openPage(demoSalutem));
btnDemoFoodmapMb.addEventListener('click', () => openPage(demoFoodmap));
btnDemoVisitorMb.addEventListener('click', () => openPage(demoVisitor));
btnDemoEduticMb.addEventListener('click', () => openPage(demoEdutic));

document.addEventListener('DOMContentLoaded', function () {
  const sidenav = document.querySelectorAll('.sidenav');
  const scrollspy = document.querySelectorAll('.scrollspy');
  M.Sidenav.init(sidenav);
  M.ScrollSpy.init(scrollspy);
});
