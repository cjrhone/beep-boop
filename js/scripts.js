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

if ( number === 1 ) {
  return "boop";
} else {
  return "beep";
}

}
