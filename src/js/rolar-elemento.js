import { pegaElemento } from "./ultils.js";

const listaBnts = pegaElemento('.menu button', 2);
const listLinks = pegaElemento('.footer-list button', 2);
console.log(listLinks)

const scrollElement = (elemento) => {
  elemento.scrollIntoView({ //1
    behavior: "smooth",
    block: "start", // 'start' = topo da tela
  });
};

listaBnts.forEach(botao => {
  botao.addEventListener('click', () => {
    const posicaoElement = pegaElemento(botao.dataset.posicao);
    scrollElement(posicaoElement)
  });
});

listLinks.forEach(botao => {
  botao.addEventListener('click', () => {
    const posicaoElement = pegaElemento(botao.dataset.posicao);
    scrollElement(posicaoElement)
  });
});