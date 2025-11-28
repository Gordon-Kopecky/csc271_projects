// Name: Gordon Kopecky
// Date: November 2025
// File: spot-selector.js
// Description: Handles the Study Spot Finder quiz on the Welcome page.
// Getting the selected answer from each radio button group
// Choosing the recommended study spot
// Showing a default message when the page loads

document.addEventListener('DOMContentLoaded', function () {
  showWelcomeMessage();

  // set up the click event for the "Find My Study Spot" button
  var btn = document.getElementById('findSpotBtn');
  if (btn) {
    btn.addEventListener('click', handleFindSpotClick);
  }
});

function showWelcomeMessage() {
  var result = document.getElementById('spotResult');
  if (result) {
    result.textContent = "Answer the questions above to find a study spot that fits you.";
  }
}
// gets the selected value from a group of radio buttons (by name).
function getValue(groupName) {
  var buttons = document.getElementsByName(groupName);
  var i;

  for (i = 0; i < buttons.length; i++) {
    if (buttons[i].checked) {
      return buttons[i].value; // "yes" or "no"
    }
  }

  // Nothing picked
  return null;
}
// sses the three answers to decide which study spot to suggest.
function suggestStudySpot(silent, outlets, food) {
  var spot;

  if (silent === "yes" && outlets === "yes" && food === "no") {
    spot = "Library quiet floor near the outlet wall.";
  } else if (silent === "yes" && outlets === "no") {
    spot = "A quiet reading room in the library or corner away from outlets.";
  } else if (silent === "no" && food === "yes") {
    spot = "Student union or campus cafe seating.";
  } else if (silent === "no" && outlets === "yes") {
    spot = "Open tables in the union with outlets nearby.";
  } else {
    spot = "Try the library or student union and pick a spot that feels comfortable for you.";
  }

  return spot;
}
// called when the user clicks the "Find My Study Spot" button.
function handleFindSpotClick() {
  var silent = getValue("silent");
  var outlets = getValue("outlets");
  var food = getValue("food");
  var result = document.getElementById('spotResult');

  if (!result) {
    return;
  }
  // make sure the user answered all three questions
  if (silent === null || outlets === null || food === null) {
    result.textContent = "Please answer all three questions first.";
    return;
  }
  // get a suggestion and show it
  var suggestion = suggestStudySpot(silent, outlets, food);
  result.textContent = "Recommended spot: " + suggestion;
}

