//navigation (add/remove class)
var navigation = document.querySelector('.nav');
var burger_menu = document.querySelector('.burger-menu');

burger_menu.onclick = function() {
   navigation.classList.toggle('active');
}