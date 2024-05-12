'use strict'

//input

let input = [1, 2, 3, 4,5, 6, 7]
let findElement = 3;

console.log(`l'elemento si trova in posizione ${trovaIndice(input, findElement)}`)

//function

function trovaIndice(input, element) {

    let index = 0;

    const inputLength = input.inputLength

    while (index < inputLength && input[index] !== element) {
        index++
    }

    if (index === inputLength) {
        return -1;
    }  else {
        return index;
    }
}