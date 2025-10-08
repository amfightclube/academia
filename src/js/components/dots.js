import { pegaElemento } from "../ultils.js";
import { passarImg } from "../galeria-alunos.js";

const container = pegaElemento('.galaria-alunos'); 
const dots = pegaElemento('.dot', 2);
const img = pegaElemento('.galaria-alunos > img');
let largImg;
let timer;

const observer = new ResizeObserver(entries => {
  let larguraNova = entries[0].contentRect.width;
  largImg = larguraNova;
   
  clearTimeout(timer); //pra n se acumular.
  timer = setTimeout(() => { //n chamar f varias vezes.
    if (container.scrollLeft != 0) {//n esta na primeira img.
      passarImg(0)
   };//1
  }, 100);//ms
   
});

observer.observe(img);

container.addEventListener('scroll', () => {
  const scrollLeft = container.scrollLeft;
  const activeIndex = Math.round(scrollLeft / largImg);
  
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (dots[activeIndex]) {
    dots[activeIndex].classList.add('active');
  }
});

/*
  1 - o quanto a div rolou pro lado ja que ela tem scroll x
*/