///**
//* Created by gil-arnaudcoche on 23/01/15.
//*/
//
//var greeting = "Hello ";
//bonjour(greeting);
//
//
//function bonjour(greeting) {
//
//    var name = prompt("What is your name?");
//    var greeting_message = greeting + " " + name;
//
//    alert(greeting_message);
//
//}

jQuery("#greeting-form").on("submit", function(event_details) {
    alert("Submitted");
    event_details.preventDefault();
});