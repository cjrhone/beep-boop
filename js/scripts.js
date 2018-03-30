// USER INTERFACE LOGIC

$(document).ready(function() {
  $("#robotForm").submit(function(event) {
    event.preventDefault();

    alert("Your button is working, human.");

    var userNum = parseInt($("#robotInput").val()); //transform Input from string to integer ( to check if 3 divisible first)
    var finalResult = robotize(userNum)

    alert(robotize(userNum));
    $(".results").text(finalResult);
    $(".results").show();



  });
});

//BUSINESS LOGIC

var robotize = function(number) {

if (number%3 !== 0 || number === 0) { //If the number is NOT divisible by 3 or number 0 ... ( Jump to ELSE statement)

    if (number.toString().match(/1/) != null) { //If we check our number and 1 DOES NOT return false
      return "Boop!";                             // return "Boop!"
    }   else if (number.toString().match(/0/) != null) { // Else if.. if we check our number and 0 DOES NOT return false
          return "Beep!";                                 // return "Beep!"
    }
} else {
  console.log("3 logic number = " + number);
    return "I'm sorry Dave, I'm afraid I can't do that."; //ElSE... "I'm sorry Dave, I'm afraid I can't do that."
    };
  };
