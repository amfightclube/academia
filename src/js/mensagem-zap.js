import { pegaElemento } from "./ultils.js";

const listBntsMesg = pegaElemento('[data-mensagem]', 2);

listBntsMesg.forEach(botao => {
  let msg;

  botao.addEventListener('click', () => {
    if (botao.hasAttribute('data-planos')) {
      let arte = botao.dataset.planos;
      let valor = botao.dataset.valor;
      msg = `👋Olá! Vim pelo site do A.M Fight Clube.Escolhi o plano:\n${arte}Valor:${valor}\nPor favor, me envie mais informações!
      `
    } else if (botao.hasAttribute('data-agendar')) {
      msg = '👋 Olá, vim pelo site do a.m fight clube e quero agendar minha aula experimental!';
    } else msg = '👋 Olá, vim pelo site do a.m fight clube, quero saber mais!';

    console.log(msg)
    const numero = '5582993358665';
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
    window.open(link, '_blank');
  });
});


//encodeURIComponent faz a mensagem funcionar certinho 

 