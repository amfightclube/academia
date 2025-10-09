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

//Menu fecha automaticamente ao rolar para baixo.
const observer = new IntersectionObserver((listElemntsObs) => {
  listElemntsObs.forEach(elementObs => {
    if (!elementObs.isIntersecting) {
      let elemento = elementObs.target;
      const bntImg = bntMenu.querySelector('img');
      
      bntImg.src = "./src/img/icon-hamburger.svg";
      elemento.classList.replace('opacity-100', "opacity-0");
      elemento.classList.replace('visible', "invisible");
    };
  });
});

observer.observe(menu);