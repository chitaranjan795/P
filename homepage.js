const hamburgerMenu = document.querySelector('.hamburger');
const menuIsActive= () => {
  hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive)

$(".hamburger").click(function(){
  $(".link").slideToggle();
});

$("#readmore").click(function(){
  $("#rajapara").toggle();
});

$("#readmore").click(function(){
  $("#readmore").fadeOut(1);
});

AOS.init({
  offset:170,
  duration: 1500
});
