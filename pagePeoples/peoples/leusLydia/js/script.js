//


//


// "use strict";


$(".polzunok-1").slider({
    min: 1,
    max: 11,
    value: 7,
    range: "min",
    animate: "fast",
});


let opt = $(".polzunok-1").data().uiSlider.options,

    min = opt.min,
    raz = opt.max - min,
    zero = 0;


for (let i = 1; i < raz; i++) {


    $(".polzunok-1").append($('<b class="click-on-b">' + '</b>').css('left', (i / raz * 100) + '%'));


    const arrBottom = ['1985 г.', '2005 г.', '2009 г.', '2019 г.'], // нижний ряд
        arrTop = ['1997 г.', '2000 г.', '2007 г.', '2018 г.', '2021 г.',] // верхний ряд

    if (i % 2 === 0) {

        $(".polzunok-1").append($('<span id="b">' + arrBottom[zero] + '</span>').css('left', (i / raz * 100) + '%'));
        zero++
    } else {
        $(".polzunok-1").append($('<span id="f">' + arrTop[zero] + '</span>').css('left', (i / raz * 100) + '%'));
    }

}


const elementB = document.querySelectorAll('.click-on-b'),
    output = document.querySelector('.year-skill'),
    la = document.querySelector('.la');


for (const elementBKey in elementB) {
    let el = elementB[elementBKey];


    el.addEventListener('click', () => {

        let nextElem = el.nextSibling

        output.innerHTML = nextElem.innerHTML;
    })

}








