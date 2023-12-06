// lab13.js - Loops
// Author: Ruby Wenzlaff
// Date: 27 November, 2023


//Give a number and an object that looks like this:
//      {3: "Crash!", 5: "Clang!", 7 "Meow!"}
//Loops over the number and outputs the number and the matching text for factors


console.log("java script is working");


maxFactors = 4;
outputEl = document.getElementById("output");

//get the values from the user entry and write them as an object
function getFactorObj () {
  var factorObj = {};
  var numId, textId, numValue, textValue;
  for (var factor=0; factor<maxFactors; factor++) {
      numId = "num" + factor;
      textId = "text" + factor;
      numValue = document.getElementById(numId).value;
      textValue = document.getElementById(textId).value;

    console.log(factor + ") num:", numValue, "text:", textValue)
    //if either value if blank, don't use it
    if (numValue && textValue) {
      factorObj[numValue] = textValue;
    }
  }
  return factorObj;
}
function outputToPage (str) {
  newEl = document.createElement ("p");
  newEl.innerHTML = str;
  outputEl.appendChild(newEl);
}

//loops over the number and outputs the number and the corresponding text for factors

function crashClangMeow(maxNums, factorObj) {
  //iterate over all of the numbers

}
  for (var num=0; num<maxNums; num++) 
  debugger;
  //reset output string
  var outputStr = "";
  //iterate over the factors from the html
  for (var factor in factorObj) {
      //check to see if this num is a multiple of factor
      if (num % factor == 0) {
        //if yes, then add the text to output string
        outputStr += factorObj [factor];
      }
  }
  //now if there are words in outputStr, formate them like this " - CrashClang!"
  if (outputStr) {
      outputStr = " - " + outputStr + "!";
  }
  outputToPage(num.toString() + outputStr)
function reportError(str) {
  outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function () {
  var max = document.getElementById("max").value;
  console.log("max:", max)
  if (! max) {
    reportError("Yout must provide a maximum");
    return;
  }
  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (Object.keys(factorObj). length === 0) {
    reportError("You must provide at least one factor and text");
    return;
  }
  //clear error if there is one
  outputEl.innerHTML = "";
  crashClangMeow(max, factorObj);
  outputStr.classList.add("cols");
})

