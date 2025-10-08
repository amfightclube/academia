import { pegaElemento } from './ultils.js';

const container = pegaElemento('.galaria-alunos');
const listImgs = pegaElemento('.galaria-alunos > img', 2);
const bnts = pegaElemento('.container-bnt-gl button', 2);
let posicao = 0;

const passarImg = (index) => {
  container.scrollTo({
    left: listImgs[index].offsetLeft, //1
    behavior: "smooth"
  });
};

bnts.forEach(bnt => {
  bnt.addEventListener('click', () => {
    if (bnt.dataset.ide === "prox") {
      if (posicao > 1) posicao = 0;
      else posicao++;
      passarImg(posicao);
    } else {
      if (posicao > 0) posicao--;
      passarImg(posicao);
    };
  });
});

export { passarImg };

/*
  //1 pega a posicao da img em relacao ao ponto inicial da div.
    comentario:o scrollTo, e bom pra essas coisas, mas e horrivel 
    quando quer ir ate um elemento que esta no body, melhor ultilizar o outro.
*/