const backdrop = document.querySelector('.backdrop');
const navigation = document.querySelector('.navigation')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelectorAll('.navigation__item__link')
const footerLinks = document.querySelectorAll('.footer__link')

function closeBackDrop(e) {
    e.target.style.transform = 'translate(-1000px)';
    navigation.style.transform = 'translate(-1000px)';
}
backdrop.addEventListener('click', closeBackDrop)

function openNav(e){

    navigation.style.transform = 'translate(0px)'
    backdrop.style.transform=  'translate(0px)'

}
hamburger.addEventListener('click', openNav)

function closeMenu(e) {
    navigation.style.transform = 'translate(-1000px)';
    backdrop.style.transform = 'translate(-1000px)';
}
navLinks.forEach(navlink=>{
    navlink.addEventListener('click', closeMenu)
})
footerLinks.forEach(footerlink=>{
    footerlink.addEventListener('click', closeMenu)
})