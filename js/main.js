const swiper = new Swiper('.shop__swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 1,
    autoHeight: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swipen__next',
        prevEl: '.swipen__prew',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {

        300: {
            slidesPerView: 1,
            spaceBetween: 80
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

// ------Бургер------------------

let burgerMenu = document.querySelector('.burger');
let menuMobile = document.querySelector('.navbar__menu');

burgerMenu.addEventListener('click', function () {
    menuMobile.classList.toggle('active');
    burgerMenu.classList.toggle('on');
    // Чтобы body не скроллилось - для body.lock => overflow: hidden
    document.body.classList.toggle('lock');
})