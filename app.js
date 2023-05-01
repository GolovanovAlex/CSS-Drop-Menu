const profile = document.querySelector('.profile');
const menu = document.querySelector('.menu');

profile.onclick = function () {
  menu.classList.toggle('active');
};
