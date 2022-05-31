// clic sur menu icon ouverture
const menuIcon = document.querySelector('.menuIcon');

menuIcon.addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  menu.classList.add('active');
});

// clic sur menu icon fermeture
const closeIcon = document.querySelector('.closeIcon');

closeIcon.addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  menu.classList.remove('active');
});
