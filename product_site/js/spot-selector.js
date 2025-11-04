// Gordon Kopecky 
// October 28th, 2025
// This script picks a study spot based on 3 yes/no questions

// get selected radio button from a group
function getValue(name) {
  let buttons = document.getElementsByName(name);
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].checked) {
      return buttons[i].value;
    }
  }
  return null; // nothing picked
}

document.getElementById("findSpotBtn").addEventListener("click", function () {

  let quiet = getValue("silent");
  let plugs = getValue("outlets");
  let food = getValue("food");

  if (quiet === null || plugs === null || food === null) {
    document.getElementById("spotResult").textContent = "Answer everything first.";
    return;
  }

  // final answer
  let spot = "";

  if (quiet === "yes") {
    if (plugs === "yes") {
      spot = "Library Quiet Floor";
    } else {
      spot = "Reading Room";
    }
  } else {
    if (food === "yes") {
      spot = "Union Cafe Lounge";
    } else {
      spot = "Library Basement Group Area";
    }
  }

  document.getElementById("spotResult").textContent = "Recommended Spot: " + spot;
});
