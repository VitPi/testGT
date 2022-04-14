//

"use strict";


//


//


const body = document.body,
    clickOnLink = document.querySelectorAll('.services'),
    checkbox = document.querySelector('#menu__toggle');


for (const clickOnLinkElement of clickOnLink) {

    clickOnLinkElement.addEventListener('click', () => {

        clickOnLinkElement.classList.toggle('click')

        clickOnLinkElement.nextElementSibling.classList.toggle('services-item');

    })


}
































