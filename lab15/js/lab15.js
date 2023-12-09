// lab15.js - AJAX
// Author: Ruby Wenzlaff
// Date: 04 December, 2023

// Using the core $.ajax() method
$("#activate").click(function(){
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://dog.ceo/api/breeds/image/random",
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
      var image = data.message;
      // do stuff
      $("#dogImage").attr("src", image);
      console.log(data);
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
})

})



