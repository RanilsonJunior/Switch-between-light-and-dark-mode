/*Código para tocar as cores*/ 
const $html = document.querySelector("html")
const $checkbox = document.querySelector("#troca3") /*Modificar pelo ID do checkbox*/

$checkbox.addEventListener("change", function() {
    $html.classList.toggle("dark-mode3") /*Modificar pela class do root*/
})  


/*Código para subir ao topo da página*/ 
const toTop = document.querySelector('.subir');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) { /*tamanho da página, quando chegar em 100 vai aparecer*/
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
})
