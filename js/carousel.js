'use strict';
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;


// create functions start
  function updateButtons(){
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0){
      prev.classList.add('hidden');
    }
    // if (currentIndex === 2){
    if (currentIndex === slides.length -1){
      next.classList.add('hidden');
    }
  };

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots(){
    for(let i = 0; i < slides.length; i++){
      const button = document.createElement('button');
      button.addEventListener('click', ()=>{
        currentIndex = i;        
        updateDots();
        updateButtons();// update next&prev button
        moveSlides();
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }
    dots[0].classList.add('current');
  };

  function updateDots(){
    // once remove all current class
    dots.forEach(dot =>{
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }
// end create function


  //関数の実行　start
  updateButtons();
  setupDots();
  updateDots();

  next.addEventListener('click', ()=>{
    currentIndex++;
    updateButtons();
    updateDots();
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    moveSlides();
  });

prev.addEventListener('click', ()=>{
  currentIndex--;
  updateButtons();
  updateDots();
  moveSlides();
});

window.addEventListener('resize', ()=>{
  moveSlides();
});
}