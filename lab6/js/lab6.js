// index.js - Arrays & Objects
// Author: Ruby Wenzlaff
// Date: 30 October, 2023

//Define Variables
var myTransport = ['legs' , 'bus', 'bike', 'skateboard', '1995 Ford Taurus w recently repaired waterpump', 'razor scooter', 'ice cream truck', 'Volkswagon Golf'];

//Creat an object for my main ride
var myMainRide = {
  make: 'Volkswagon',
  model: 'Golf',
  color: 'Muscle Blue',
  year: '2016',
  age: function() {
      return 2023 - this.year;
  }
}

// Output
document.writeln('Getting around:' + myTransport +'<br>');

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

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



