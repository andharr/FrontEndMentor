'use strict';

const number = document.querySelectorAll('.num')
const home = document.querySelector('.home')
const thankYou = document.querySelector('.thankYou')
const outOf = document.querySelector('.outOf')
const submit = document.querySelector('.submit')
let numText, activeNumberButton;


number.forEach(number => {
    number.addEventListener('click', () => {
        activeNumberButton && activeNumberButton.classList.remove('active')

        numText = number.innerText
        number.classList.toggle('active')
        activeNumberButton = number
    })
});


submit.addEventListener('click', () => {
    home.classList.add('hidden')
    thankYou.classList.remove('hidden')
    outOf.innerText = `You selected ${numText} out of 5`
});

