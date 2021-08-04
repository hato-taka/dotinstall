'use strict'
{
  const open = document.getElementById('open');
  const overlay =document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', ()=>{
    overlay.classList.add('active');
    open.classList.add('hide');
  });
  close.addEventListener('click', ()=>{
    overlay.classList.remove('active');
    open.classList.remove('hide');
  });

}