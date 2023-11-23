// lab12.js - Conditionals
// Author: Ruby Wenzlaff
// Date: 24 November, 2023

console.log("Welcome to Hogwarts School of witchcraft and wiizardry.")

//Intake a string
//Count letters in string and assign to a variable len
//Return Gryffindor, Hufflepuff, Ravenclaw, or Slytherin
function sortingHat (str) {
  len = str.length;
  mod = len % 4;

  if (mod == 0) {
    return"Gryffindor" ;
  }
  else if (mod == 1) {
    return"Hufflepuff" ;
  }
  else if (mod == 2) {
    return"Ravenclaw" ;
  }

  else if (mod == 3) {
    return"Slytherin" ;
  }
}

 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat (name);
  newText = "<p> The Sorting Hat has sorted you into " + house + "!</p>";
  document.getElementById("output").innerHTML = newText;
 })

