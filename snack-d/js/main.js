'use strict'

const input = [1, 2, 3];

console.log(rimuoviDallaCoda(input));

function rimuoviDallaCoda(input) {
  let result = [];

  let inputLength = input.length - 1;

  for (let i = 0; i < inputLength; i++) {
    result[i] = input[i];
  }

  return result;
}