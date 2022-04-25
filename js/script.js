//

"use strict";


//


//


const body = document.body,
    windowInnerWidth = window.innerWidth,
    checkbox = document.querySelector('#menu__toggle');


// =========+++++++++++++++++++++
// функция прячет элимент ul в списке


const clickOnLink = document.querySelectorAll('.menu__item'),   // сами блоки в котором надо спрятать
    costSectionItem = document.querySelectorAll('.cost-section'), // сами блоки в котором надо спрятать
    ul = document.querySelector('.item-list'),  // сам элимент который прячиться
    a = document.querySelector('.services'); // сам элимент который который крцтиться в мобилке


function hideElements(arr) {


    if (windowInnerWidth < 800) {

        for (const clickOnLinkElement of arr) {

            clickOnLinkElement.addEventListener('click', () => {
                const objChildrenColl = clickOnLinkElement.childNodes;

                for (const argumentsKey in objChildrenColl) {
                    const elementObject = objChildrenColl[argumentsKey]

                    if (elementObject.localName === ul.localName) {
                        elementObject.classList.toggle('services-item') // скрывает элимент
                    }

                    if (elementObject.localName === a.localName) {
                        elementObject.classList.toggle('click')   // на поворот стрелки в моб меню
                    }

                }
            })
        }
    }
}


hideElements(clickOnLink)
hideElements(costSectionItem)


//++++++++++++++++++++++++++++++++++


//    цвет

function colourHeaderMobile() {


    if (windowInnerWidth < 800) {


        const header = document.querySelector('header'),
            span = document.querySelector('.span'),
            nav = document.querySelector('.hamburger-menu');

        window.addEventListener('scroll', function () {

            if (scrollY >= 300) {
                header.classList.add('white')
                nav.classList.add('hamburger-menu2')
                span.classList.add('span-colour')

            } else if (scrollY < 300) {
                header.classList.remove('white')
                nav.classList.remove('hamburger-menu2')
                span.classList.remove('span-colour')
            }
        });
    }
}

colourHeaderMobile()


//    цвет

function colourHeaderDesktop() {


    if (windowInnerWidth > 800) {


        const head = document.querySelector('header'),
            blockLeft = document.querySelector('.block-left'),
            blockRight = document.querySelector('.block-right'),
            svg = document.querySelectorAll('.svg'),
            svg2 = document.querySelectorAll('.svg2'),
            nav = document.querySelector('.hamburger-menu'),
            socialLinks = document.querySelector('.social-links'),
            language = document.querySelector('.language');

        window.addEventListener('scroll', function () {

            if (scrollY > 200) {
                head.classList.add('white')
                nav.classList.add('hamburger-menu2')
                blockLeft.style.backgroundColor = 'white'
                blockRight.style.backgroundColor = 'white'
                for (const elSvg of svg) {
                    elSvg.style.display = 'block'
                }
                for (const elSvg2 of svg2) {
                    elSvg2.style.display = 'none'
                }
                language.style.display = 'none'
                socialLinks.style.display = 'none'

            } else if (scrollY < 200) {
                head.classList.remove('white')
                nav.classList.remove('hamburger-menu2')
                blockLeft.style.backgroundColor = 'transparent'
                blockRight.style.backgroundColor = 'transparent'
                for (const elSvg of svg) {
                    elSvg.style.display = 'none'
                }
                for (const elSvg2 of svg2) {
                    elSvg2.style.display = 'block'
                }
                language.style.display = 'block'
                socialLinks.style.display = 'block'

            }
        });
    }
}

colourHeaderDesktop()

























