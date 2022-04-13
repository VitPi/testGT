//

"use strict";


//


//


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});


const body = document.body,
    clickOnLink = document.querySelectorAll('.services'),
    checkbox = document.querySelector('#menu__toggle');


for (const clickOnLinkElement of clickOnLink) {

    clickOnLinkElement.addEventListener('click', () => {

        clickOnLinkElement.classList.toggle('click')

        clickOnLinkElement.nextElementSibling.classList.toggle('services-item');

    })
}
































