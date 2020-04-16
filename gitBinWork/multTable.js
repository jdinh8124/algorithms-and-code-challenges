function calculateValue() {
  var target = $(event.target);
  var textFromButton = $(target).text();
  var stringNumId1 = $("#num1").text();
  var stringNumId2 = $("#num2").text();
  var valueFromNumId1 = parseInt(stringNumId1);
  var valueFromNumId2 = parseInt(stringNumId2);
  var result;


  if (textFromButton === "+") {
    result = valueFromNumId1 + valueFromNumId2;
  } else if (textFromButton === "-") {
    result = valueFromNumId1 - valueFromNumId2;
  } else if (textFromButton === "x") {
    result = valueFromNumId1 * valueFromNumId2;
  } else {
    result = valueFromNumId1 / valueFromNumId2;
  }
  $("#result").text(result);


  //use "this" to get the element that triggered the event
  //get/store the text value from inside the element that triggered the event
  //get/store the text value from the ID num1 element
  //convert it to a number (it's a string right now)
  //get/store the text value from the ID num2 element
  //convert it to a number
  //make a variable result, leave it empty
  //use the text value to determine which action to take
  // if the text is a '+'
  //add the number from num1 and the number from num2, save the value in result
  // if the text is a '-'
  //subtract the numbers and store in result
  // if the text is a 'x'
  //multiply the numbers and store in result
  // if the text is a '/'
  //multiply the numbers and store in result
  // use the result to change the text inside the #result element
}


function applyClickHandlers() {
  $(".opContainer").on("click", calculateValue)
  //apply a click handler to all buttons INSIDE the element with a class of opContainer
  //if it is clicked, call the calculateValue function
}


$(document).ready(initializeApp);

function initializeApp() {
  applyClickHandlers();
}
