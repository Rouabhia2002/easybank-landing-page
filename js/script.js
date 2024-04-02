const hum = document.querySelector('.header__hamburger');
const headerMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const heroo = document.querySelector('.hero');
const menu = document.getElementById('menu'); 

menu.style.display = 'none'; 

hum.addEventListener('click', function() {
  if (header.classList.contains('open')) { 
    document.body.classList.remove('no-scrol');
    header.classList.remove('open');
    heroo.classList.remove('overlay');
    menu.style.display = 'none'; 
  } else {
    document.body.classList.add('no-scrol');
    header.classList.add('open');
    heroo.classList.add('overlay');
    menu.style.display = 'block'; 
  }
});

