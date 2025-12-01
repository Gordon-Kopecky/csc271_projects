// Name: Gordon Kopecky
// Date: November 2025
// File: studyspots.js
// Description: Uses a constructor to model StudySpot objects and shows example spots on the About Us page.

function StudySpot(name, location, noiseLevel, hasOutlets, foodAllowed, rating) {
  // properties
  this.name = name;
  this.location = location;
  this.noiseLevel = noiseLevel;   
  this.hasOutlets = hasOutlets;   
  this.foodAllowed = foodAllowed; 
  this.rating = rating;           

  // returns true if the spot is good for quiet studying
  this.checkQuiet = function () {
    if (this.noiseLevel === "Silent") {
      return true;
    } else {
      return false;
    }
  };

  // updates the rating to a new value
  this.updateRating = function (newRating) {
    this.rating = newRating;
  };

  // flips the foodAllowed value (true becomes false, false becomes true)
  this.toggleFood = function () {
    this.foodAllowed = !this.foodAllowed;
  };

  // returns true if the spot has outlets
  this.needsOutlets = function () {
    if (this.hasOutlets === true) {
      return true;
    } else {
      return false;
    }
  };
}

// example StudySpot 1
var librarySpot = new StudySpot(
  "Carothers Library – Quiet Floor",
  "3rd Floor, Library",
  "Silent",
  true,
  false,
  4.6
);

// example StudySpot 2
var unionSpot = new StudySpot(
  "Memorial Union – Coffee Area",
  "Main Level, Union",
  "Medium",
  false,
  true,
  3.8
);

// Call a method to update a rating 
librarySpot.updateRating(4.8);

function displayStudySpots() {
  var container = document.getElementById("studySpots");

  if (!container) {
    // if the div is missing, stop
    return;
  }

  var html = "";

  // First StudySpot
  html += "<h3>" + librarySpot.name + "</h3>";
  html += "<p>Location: " + librarySpot.location + "</p>";
  html += "<p>Noise Level: " + librarySpot.noiseLevel + "</p>";

  if (librarySpot.checkQuiet()) {
    html += "<p>Quiet friendly? Yes</p>";
  } else {
    html += "<p>Quiet friendly? No</p>";
  }

  if (librarySpot.needsOutlets()) {
    html += "<p>Has outlets? Yes</p>";
  } else {
    html += "<p>Has outlets? No</p>";
  }

  html += "<p>Rating: " + librarySpot.rating + "</p>";

  html += "<hr>";

  // second StudySpot
  html += "<h3>" + unionSpot.name + "</h3>";
  html += "<p>Location: " + unionSpot.location + "</p>";
  html += "<p>Noise Level: " + unionSpot.noiseLevel + "</p>";

  if (unionSpot.checkQuiet()) {
    html += "<p>Quiet friendly? Yes</p>";
  } else {
    html += "<p>Quiet friendly? No</p>";
  }

  if (unionSpot.needsOutlets()) {
    html += "<p>Has outlets? Yes</p>";
  } else {
    html += "<p>Has outlets? No</p>";
  }

  html += "<p>Rating: " + unionSpot.rating + "</p>";

  container.innerHTML = html;
}

displayStudySpots();
