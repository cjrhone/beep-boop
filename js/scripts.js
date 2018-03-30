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

if (number%3 !== 0) { //If the number is NOT divisible by 3 ...

  var numberString =  number.toString(); //convert number to string
  var numberSplit = numberString.split('');
  var numberArray =[];

  numberArray.push(numberSplit);

  console.log(numberArray);
  console.log("value after string and split =" + numberArray);
  console.log(typeof numberString)

  if (numberArray.includes('0')) { // '0'
    return "Beep!";
  }

  if (numberArray.includes('1')){ //'1'
    return "Boop!";
  }
}
  else {
    console.log("3 logic number = " + number);
    if (number % 3 == 0) { //Checks condition of 3 or divisible by 3
      return "I'm sorry Dave, I'm afraid I can't do that.";
    } else {
      return "BZZT. Does not compute."; //Returns error if no conditions met
    };
  };
};
