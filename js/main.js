const menuBtn = document.querySelector('.mobile-menu');
const menu =document.querySelector('.menu-sidebar');

menuBtn.addEventListener ( 'click', function(){
  menu.classList.toggle('active');
})