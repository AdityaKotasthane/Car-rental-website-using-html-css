let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('bx-x');
}

window.onscroll = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
const sr  = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('text.',{delay: 200, origin: 'top'})