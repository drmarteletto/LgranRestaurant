var hamburguer = document.querySelector('.menu-ipad-hamburguer');

hamburguer.addEventListener("click", function(){
    document.querySelector('.menu').classList.toggle('menu-opened');
    document.querySelector('.menu-ipad-hamburguer').classList.toggle('menu-ipad-hamburguer-opened');
})