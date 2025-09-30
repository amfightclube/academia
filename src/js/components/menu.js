const menu = document.querySelector('.menu');
const bntMenu = document.querySelector('#bnt-menu');

bntMenu.addEventListener('click', () => {
  const bntImg = bntMenu.querySelector('img');
  const caminho = bntImg.getAttribute('src');

  if (caminho === './src/img/icon-hamburger.svg') {
    bntImg.src = './src/img/icon-close.svg';
  } else bntImg.src = './src/img/icon-hamburger.svg';

  menu.classList.toggle('opacity-0');
  menu.classList.toggle('invisible');
  menu.classList.toggle('opacity-100');
  menu.classList.toggle('visible');
});
