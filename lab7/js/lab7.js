// index.js - Functions
// Author: Ruby Wenzlaff
// Date: 3 November, 2023

//sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName () {
    var userName = window.prompt("Hello there. Please tell me your name so I can fix it.");
    console.log("userName=", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log('nameArray =', nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log('nameArraySort =', nameArraySort);
    //join array back to string
    var nameSorted = nameArraySort.join('');
    console.log('nameSorted =', nameSorted);
    return nameSorted;
}
//output
document.writeln("oh hey,  I've fixed your name: "),
sortUserName(), '</br>';

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



