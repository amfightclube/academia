import { pegaElemento } from "./ultils.js";

const listaBnts = pegaElemento('.menu button', 2);
console.log(listaBnts)

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
