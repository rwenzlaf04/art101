// index.js - Anon Functions & Callbacks
// Author: Ruby Wenzlaff
// Date: 06 November, 2023

function isOdd(x){
  return (x % 2 == 0);
}
undefined
isOdd(2)
true
isOdd(5)
false
array = [14, 24, 17, 29, 83, 4]
(6)[14, 24, 17, 29, 83, 4]
array.map(isOdd);
(6)[true, true, false, false, false, true]

console.log("Is 2 odd? ", isOdd(2));
console.log("Is 5 odd? ", isOdd(5));

array.map(function(x){
  return x ** 2;
})
(6)[196, 576, 289, 841, 6889, 16]

//(y*x) to multiply y by x


// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();



