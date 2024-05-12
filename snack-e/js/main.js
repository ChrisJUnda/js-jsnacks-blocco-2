'use strict'

const input = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(input);

console.log(rimuoviDallaTesta(input));

function rimuoviDallaTesta(parametroInput) {
  let result = [];
  const inputLength = input.length;

  for (let i = 1; i < inputLength; i++) {
    
    result.push(parametroInput[i]);
    
  }

  return result;
}