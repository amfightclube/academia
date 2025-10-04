import { pegaElemento } from "./ultils.js";

const listBntsMesg = pegaElemento('[data-mensagem]');

listBntsMesg.addEventListener('click', () => {
  const numero = '5582993358665';
  const msg = 'Olá, vim pelo site do a.m fight clube';
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(link, '_blank');
});

//encodeURIComponent faz a mensagem funcionar certinho 

 