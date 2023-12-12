// Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.scrollTo(0, 0);
    }
}


///

buttonUp = document.getElementById("button-up");

window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        buttonUp.style.transform = "scale(0)";
    }

}


//menu móvil
const toggleMenuElement = document.getElementById('nav__menu');
const mainMenuElement = document.getElementById('home__nav');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main__menu--show');
});




