// USER INTERFACE LOGIC

$(document).ready(function() {
  $("#robotForm").submit(function(event) {
    event.preventDefault();

    alert("Your button is working, human.");

    var userNum = parseInt($("#robotInput").val());
    var finalResult = robotize(userNum)

    $(".results").show();
    $(".results").text(finalResult);

  });
});

//BUSINESS LOGIC

var robotize = function(number) {

  console.log("booting up");
//
// var conditions = [1, 0, 3];
//
//   for (var i=0; i < number.length; i++) {

    console.log("Roboting");

    if (number === 1){ //'1'

      return "1";

    }
    if ( number === 0) { // '0'

      return "0";

    }

    if ( number === 3 || number % 3 == 0 ) {

      return "I'm sorry Dave, I can't do that.";

    } else {

      return "BZZT. Does not compute.";
    };
  };
