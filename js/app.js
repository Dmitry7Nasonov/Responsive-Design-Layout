let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');
let exit = document.querySelector('#exit');

menu.addEventListener('click', showMenu);
exit.addEventListener('click', exitMenu);

function showMenu(e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
}

function exitMenu(e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
}