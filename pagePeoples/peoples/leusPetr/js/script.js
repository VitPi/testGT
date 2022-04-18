// /


"use strict";


const arrow = document.querySelector('.arrow'),
    aboutPeople = document.querySelector('.about-people'),
    aboutBr = document.querySelector('.about-br');

arrow.addEventListener('click', () => {
    // console.log(arrow.);
    // aboutPeople.style.height = 'auto'


    arrow.classList.toggle('rotate')
    aboutBr.classList.toggle('about-br-none')
    aboutPeople.classList.toggle('rotate-height')


})








