'use strict'
{
  const open = document.getElementById('open');
  const overlay =document.querySelector('.overlay');

  open.addEventListener('click', ()=>{
    overlay.classList.add('active');
    open.classList.add('hide');
  });

}