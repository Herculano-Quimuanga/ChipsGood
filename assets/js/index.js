/*=========== SHOW MENU ===========*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*=========== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=========== SHADOW HEADER ===========*/
const scrollHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

/*=========== SWIPER FAVORITES ===========*/ 
const swiperFavorites = new Swiper('.favorites__swiper', {
    loop: true,
    grabCursor:true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
})

/*=========== SHOW SCROLL UP ===========*/ 
const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                        : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup);

/*=========== SCROLL SECTIONS ACTIVE LINK ===========*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href="#' + sectionId + '"]');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            if (sectionClass) sectionClass.classList.add('active-link');
        } else {
            if (sectionClass) sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=========== SCROLL REVEAL ANIMATION ===========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset:true,
});

sr.reveal('.home__data, .favorites__container. .footer__container');
sr.reveal('.home__circle, .home_img', {delay: 600, scale:.5});
sr.reveal('.home__chips-1, .home__chips-2', {delay: 1000, interval:100});
sr.reveal('.home__leaf', {delay: 1200});
sr.reveal('.home__tomato-1, .home__tomado-2', {delay: 1400, interval:100});
sr.reveal('.care__img, .contact__img', {origin: 'left'});
sr.reveal('.care__list, .contact__data', {origin: 'right'});
sr.reveal('.banner__item, .produts__card', {interval: 100});