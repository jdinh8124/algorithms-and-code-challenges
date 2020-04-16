
var jsbin = 'stupid';
/*The purpose of this app is to allow the names to be clicked
on and move from one list to the other list.
So for example, if I clicked on "Dennis", the blue Dennis
box would move to the right list.  If I click on the
"Dennis" box on the right column, it would move to the
left column */

function applyClickHandlers() {
  $(".name").on("click", shiftName);
  //add a click handler onto each div with a class of name
  //when it is clicked, it should call "shiftName"
}

function shiftName() {
  var target = $(event.target);
  var parentElement = target.parent();
  var parentId = parentElement.attr("id");
  if (parentId === "list") {
    $("#repo").append(target);
  } else {
    $("#list").append(target);
  }
  //get the element to target from "this"
  //use jquery's parent to get the parent of the div, and save that into a variable "parentElement"
  //get the ID of the parent element with the jquery attr command
  //if the ID is list, append the target element in the #repo div
  //otherwise, append the target div into the #list div
}

/* don't change this code*/



$(document).ready(initializeApp);

function initializeApp() {
  addNames();
  applyClickHandlers();
}

function addNames() {
  var names = ['Dan', 'Nathan', 'Dennis', 'Charles'];
  for (var i = 0; i < names.length; i++) {
    var div = $("<div>", {
      'class': 'name'
    }).text(names[i]);
    $("#list").append(div);
  }
}
