//

"use strict";

//


function openForm() {

    const nextForm = document.querySelector('.next-form'),
        form = document.querySelector('.form');


    nextForm.addEventListener('click', () => {


        nextForm.lastElementChild.classList.toggle('rote');

        form.classList.toggle('form-dis');
    })

}


openForm()

