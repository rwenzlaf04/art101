// index.js - Libraries & jQuery
// Author: Ruby Wenzlaff
// Date: 13 November, 2023

//Add button to challenge section 
$(".challenge").append("<button id='my-button'> Pink</button>");
  $("#my-button").click(function(){
    $(".challenge").css("background-color", "pink")
    console.log("Don't press me, brah."); 
});
  //Add a click listener to challenge section
$('#my-button').click(function(){
  $("#challenge").toggleClass(".special");
});


//Add button to problems section
$(".problems").append("<button id='your-button'> Green</button>");
  $("#your-button").click(function(){
    $(".problems").css("background-color", "green")
    console.log("Don't press me, brah.");
});
//Add a click listener to problems section
$('#your-button').click(function(){
  $("#problems").toggleClass(".special");
});

//Add button to reflection section
$(".reflection").append("<button id='her-button'> Orange</button>");
$("#her-button").click(function(){
    $(".reflection").css("background-color", "orange")
  console.log("Don't press me, brah.");
});
//Add a click listener to reflecetion section
$('#her-button').click(function(){
  $("#reflection").toggleClass(".special");
});

//Add button to results section
$(".results").append("<button id='his-button'> Purple</button>");
  $("#his-button").click(function(){
    $(".results").css("background-color", "purple")
  console.log("Don't press me, brah.");
});
//Add a click listener to reflecetion section
$('#is-button').click(function(){
  $("#results").toggleClass(".special");
});
