const burgerM = document.querySelector('.menu');
const navBar = document.querySelector('.mobile');

burgerM.addEventListener('click', ()=>{
  navBar.classList.toggle('active');
  burgerM.classList.toggle('action');
});