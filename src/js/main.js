import './components/menu.js';
import './components/dots.js';
import './rolar-elemento.js';

const elementos = document.querySelectorAll('[data-animate]');//3

//obeserver e uma funcao que eu criei o parametro e o elemento.
const observer = new IntersectionObserver((entries) => { 
   entries.forEach(elementObs => {
     if (elementObs.isIntersecting) { //1
        let elemento = elementObs.target //target e o elemento
        elemento.classList.add('animate-cascata')
        observer.unobserve(elemento) //2
     }
   });
}, { threshold: 0.2 }); //20% visivel

//Aqui eu adiciono a cada elemento essa funçao
elementos.forEach(elemento => observer.observe(elemento));

/*
  1 - e a propriedade se esta visivel ou n
  2 - ele para de observar o elemento, e da pra usar a funcao ali
      porque n momento que eu estou ali dentro a funcao ja foi criada.
  3 - Usar quando eu n for ultilizar css so vou precisar do elemento no js
*/