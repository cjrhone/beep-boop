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

var numberString =  number.toString().split('');




  console.log(numberString);


    if (numberString === '0') { // '0'
      return "Beep!";
    }

    if (numberString === '1'){ //'1'
      return "Boop!";
    }

    console.log(number);

    if (number % 3 == 0) { //Checks condition of 3 or divisible by 3
      return "I'm sorry Dave, I'm afraid I can't do that.";
    } else {
      return "BZZT. Does not compute."; //Returns error if no conditions met
    };
  };
