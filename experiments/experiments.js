$("#my-button").click(function(){
    var name = prompt("What's your name?: ");
    $("#title").html('Hello' + name + '!');
})