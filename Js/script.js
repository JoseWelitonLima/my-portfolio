
/* Transformar o menu hamburguer em X */


const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', toggleMenu);  // Chama a função toggleMenu ao clicar no menu

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');  // Corrige o seletor com a classe correta
    menuHamburguer.classList.toggle('change');  // Alterna a classe "change"

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';  // Mostra o menu se a classe "change" está presente
    } else {
        nav.style.display = 'none';  // Oculta o menu se a classe "change" não está presente
    }
}



