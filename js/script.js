//

"use strict";


//


//


const body = document.body,

    checkbox = document.querySelector('#menu__toggle');


// =========+++++++++++++++++++++
// функция прячет элимент ul в списке


const clickOnLink = document.querySelectorAll('.menu__item'),   // сами блоки в котором надо спрятать
    costSectionItem = document.querySelectorAll('.cost-section'), // сами блоки в котором надо спрятать
    ul = document.querySelector('.item-list'),  // сам элимент который прячиться
    a = document.querySelector('.services'); // сам элимент который прячиться
const aft = document.querySelector('.after')


// console.log(aft);

function hideElements(arr) {

    for (const clickOnLinkElement of arr) {

        clickOnLinkElement.addEventListener('click', () => {
            const objChildrenColl = clickOnLinkElement.childNodes,
                crest = document.querySelector('.after')  // что переворачивать

            for (const argumentsKey in objChildrenColl) {
                const elementObject = objChildrenColl[argumentsKey]

                if (elementObject.localName === ul.localName) {
                    elementObject.classList.toggle('services-item') // скрывает элимент
                }
                if (elementObject.localName === a.localName) {
                    elementObject.classList.toggle('click')   // на поворот стрелки в моб меню
                }
                if (elementObject.localName === crest.localName) {
                    elementObject.classList.toggle('after-click')   // на поворот крестиков на pageCost
                }

            }
        })
    }
}


hideElements(clickOnLink)
hideElements(costSectionItem)


//++++++++++++++++++++++++++++++++++































