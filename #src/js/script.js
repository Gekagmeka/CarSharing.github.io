//navigation (add/remove class)
var navigation = document.querySelector('.nav');
var burger_menu = document.querySelector('.burger-menu');
var body_main = document.querySelector('body');

burger_menu.onclick = function() {
   navigation.classList.toggle('active');
   body_main.classList.toggle('locked');
}