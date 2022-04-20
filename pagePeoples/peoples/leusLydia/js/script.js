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

const arrTop = ['1997 г.', '2000 г.', '2007 г.', '2018 г.', '2021 г.',], // верхний ряд
    arrBottom = ['1985 г.', '2005 г.', '2009 г.', '2019 г.']; // нижний ряд

for (let i = 1; i < raz; i++) {
    $(".polzunok-1").append($('<b class="click-on-b">' + '</b>').css('left', (i / raz * 100) + '%'));
    if (i % 2 === 0) {
        $(".polzunok-1").append($('<span id="b">' + arrBottom[zero] + '</span>').css('left', (i / raz * 100) + '%'));
        zero++
    } else {
        $(".polzunok-1").append($('<span id="f">' + arrTop[zero] + '</span>').css('left', (i / raz * 100) + '%'));
    }

}

const elementB = document.querySelectorAll('.click-on-b'),
    output = document.querySelector('.year-skill'),
    la = document.querySelector('.prof'),
    left = document.querySelector('.left'),
    right = document.querySelector('.right');

function joinArr(arr, arr2) {

    const masArr = [];

    for (let i = 0; i < arr.length; i++) {
        masArr.push(arr[i])
        masArr.push(arr2[i])
    }

    let numberPos = masArr.indexOf(output.innerHTML);   // номер элимента в массиве


    left.addEventListener('click', () => {

        if (numberPos >= 0) {
            output.innerHTML = masArr[numberPos]
            numberPos--
            if (numberPos < 0) {
                numberPos = 0
            }
        }
    })


    right.addEventListener('click', () => {

        if (numberPos <= masArr.length - 2) {
            output.innerHTML = masArr[numberPos]
            numberPos++
            if (numberPos > masArr.length - 2) {
                numberPos = masArr.length - 2
            }
        }
    })


}

joinArr(arrTop, arrBottom)


for (const elementBKey in elementB) {
    let el = elementB[elementBKey];

    el.addEventListener('click', () => {

        let nextElem = el.nextSibling

        output.innerHTML = nextElem.innerHTML;
    })

}



























