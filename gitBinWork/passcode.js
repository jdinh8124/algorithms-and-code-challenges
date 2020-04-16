//input passcode checker
//make an app that allows you to punch in a set of numbers
//and then press # to enter the number and check if it is right or not
//after you check, right or wrong, you clear the attempt
$(document).ready(initializeApp);

function initializeApp() {
    $("#1").on("click", handleInput );
    $("#2").on("click", handleInput );
    $("#3").on("click", handleInput );
    $("#4").on("click", handleInput );
    $("#5").on("click", handleInput );
    $("#6").on("click", handleInput );
    $("#7").on("click", handleInput );
    $("#8").on("click", handleInput );
    $("#9").on("click", handleInput );
    $("#0").on("click", handleInput );
    $("#pound").on("click", handleInput );

  //add a click handler to every button, call "handleInput" when it is clicked
}

var currentPasscode = '';

function handleInput() {
	var passcode = "840241";
	var clickToString = $(this).text();
	if (clickToString === "#") {
		var checkCodeAgainstKey = checkPasscode(passcode);
		if (checkCodeAgainstKey) {
			displaySuccess();
       	} else {
			displayError();
			currentPasscode = '';
		}
	}else {
		currentPasscode += clickToString;
		$("#display").text(currentPasscode)
	}
}

  //the button that was pressed will be 'this'
  //get the text from the button that was pressed
  //if the text is "#", see if the number entered was equal to the passcode variable,
    //call checkPasscode
    //if checkPasscode returns true, pass in the passcode variable as an argument
      //call displaySuccess.
    //otherwise
      //call displayError
    //clear the currentPasscode back to its original value
  //otherwise
    //add the text to the value inside currentPasscode, store the result into currentPasscode
    //also change the ID display element's text to be the current value of currentPasscode



function checkPasscode(passcodeArg) {
  if (currentPasscode === passcodeArg) {
    return true;
  } else {
    return false;
  }

  //check if passcode is the same as currentPasscode
  //return true if they are the same
  //return false if they are not
}

function displaySuccess() {
  //change the text in #display to be "SUCCESS!" in green
   $("#display").text("SUCCESS!").css("color", "green");
}

function displayError() {
  //change the text in #display to be "FAIL!" in red
  $("#display").text("FAIL").css("color", "red");
}
//
//document.getElementById("#display").innerText = "<span class='color-green'>SUCCESS!</span>";
// document.getElementById("#display").innerText = "<span class='color-red'>FAIL!</span>";
