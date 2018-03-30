// USER INTERFACE LOGIC

$(document).ready(function() {
  $("#robotForm").submit(function(event) {
    event.preventDefault();

    alert("Your button is working, human.");

    var userNum = parseInt($("#robotInput").val());
    var finalResult = robotize(userNum)

    alert(robotize(userNum));
    $(".results").text(finalResult);
    $(".results").show();



  });
});

//BUSINESS LOGIC

var robotize = function(number) {

if (number%3 !== 0 || number === 0) { //If the number is NOT divisible by 3 ...

  // var numberString =  number.toString(); //convert number to string
  // var numberSplit = numberString.split('');

  if (number == '0') { // '0'
    return "Beep!";
  };

  if (number == '1') { //'1'
    return "Boop!";
  };
} else {
  console.log("3 logic number = " + number); //Checks condition of 3 or divisible by 3
    return "I'm sorry Dave, I'm afraid I can't do that.";
    };
  };
