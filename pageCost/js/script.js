//

"use strict";


const crest = document.querySelector('.after')  // что переворачивать


function rotateElements(arr) {


    for (const clickOnLinkElement of arr) {


        clickOnLinkElement.addEventListener('click', () => {
            const objChildrenColl = clickOnLinkElement.childNodes;

            for (const argumentsKey in objChildrenColl) {
                const elementObject = objChildrenColl[argumentsKey]

                if (elementObject.localName === crest.localName) {
                    elementObject.classList.toggle('after-click')   // на поворот крестиков на pageCost
                }
            }

        })
    }
}

rotateElements(costSectionItem)


