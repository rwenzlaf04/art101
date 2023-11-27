// lab13.js - Loops
// Author: Ruby Wenzlaff
// Date: 27 November, 2023



for (var index=1; index<=200; index++) {

  if (index % 3 === 0 && index % 7 === 0) {
    console.log ("FizzBuzz!");
  }
  if (index % 3 === 0 && index % 5 === 0) {
    console.log ("BuzzBoom!") ;
  }
else if (index % 3 === 0) {
  console.log ("Fizz!") ;
}

else if (index % 5 === 0) {
  console.log ("Buzz!");
}
else if (index % 7 === 0) {
  console.log ("Boom!");
}
else {
  console.log (index);
str = console.log;
    str+="Fizz!";
  $("output").append("<p>" + "Fizz!" + "</p>");
    str += "Buzz!";
  $("output").append("<p>" + "Buzz!" + "</p>");
    str += "Boom!";
  $("output").append("<p>" + "Boom!" + "</p>");
    str += "FizzBuzz!";
  $("output").append("<p>" + "FizzBuzz" + "</p>");
    str += "BuzzBoom!";
  $("output").append("<p>" + "BuzzBoom" + "</p>");
  }

}


