const container = document.querySelector('.galaria-alunos'); 
const dots = document.querySelectorAll('.dot');

container.addEventListener('scroll', () => {
  const scrollLeft = container.scrollLeft;
  const itemWidth = 372; // largura da imagem + gap
  const activeIndex = Math.round(scrollLeft / itemWidth);
  
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (dots[activeIndex]) {
    dots[activeIndex].classList.add('active');
  }
});
