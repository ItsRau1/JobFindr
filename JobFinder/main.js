function onScroll() {
    if (scrollY > 0    ) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }    
}
function openMenu() {
        body.classList.add('menu-expanded')
}

function closeMenu() {
    body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'left' ,
    distance: '20px' ,
    duration: '1400' ,
}).reveal(`
.close-menu,
main,
.busca,
p,
h2,
#botao,
#categoria,
#Todos os Estados,
#text,
.wrapper,
.button,
#send-vagas,
.send-vagas,
.testmony-container,
.testmony-box,
.testmony-msg,
.p-blog`);

ScrollReveal({
    origin: 'left' ,
    distance: '20px' ,
    duration: '2000' ,
}).reveal(`.stats,
#article3
`);

ScrollReveal({
    origin: 'right' ,
    distance: '20px' ,
    duration: '2000' ,
}).reveal('#article1');

ScrollReveal({
    origin: 'bottom' ,
    distance: '20px' ,
    duration: '2000' ,
}).reveal('#article2');