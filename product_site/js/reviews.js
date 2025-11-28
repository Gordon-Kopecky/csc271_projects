// Name: Gordon Kopecky 
// Date: October 21st, 2025
// This script is an updated verison on my reviews page and collects a user's name and written review, then adds it to the page without refreshing.

let reviews = []; 

// DOM elements
const reviewForm = document.getElementById("reviewForm");
const nameInput = document.getElementById("name");
const reviewInput = document.getElementById("review");
const reviewBtn = document.getElementById("reviewBtn");
const reviewMessage = document.getElementById("reviewMessage");
const allReviews = document.getElementById("allReviews");

// when user clicks into the name input
nameInput.addEventListener("focus", function () {
  reviewMessage.textContent = "Please enter your full name. It cannot be blank.";
});

// when user clicks into the review input
reviewInput.addEventListener("focus", function () {
  reviewMessage.textContent = "Write a short review (at least 10 characters).";
});

nameInput.addEventListener("blur", function () {
  var username = nameInput.value.trim();

  if (username === "") {
    reviewMessage.textContent = "Name cannot be blank. Please enter your name.";
  } else {
    reviewMessage.textContent = "";
  }
});

reviewInput.addEventListener("blur", function () {
  var reviewText = reviewInput.value.trim();

  if (reviewText.length < 10) {
    reviewMessage.textContent = "Review is too short. Please add a bit more detail.";
  } else {
    reviewMessage.textContent = "";
  }
});
//submit
reviewForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from refreshing

  var username = nameInput.value.trim();
  var reviewText = reviewInput.value.trim();

  // final checks
  if (username === "") {
    reviewMessage.textContent = "Please enter your name before submitting.";
    return;
  }

  if (reviewText.length < 10) {
    reviewMessage.textContent = "Your review must be at least 10 characters long.";
    return;
  }

  // create full review text
  var fullReview = username + ": " + reviewText;
  reviews.push(fullReview);

  // confirmation message (no template literal)
  reviewMessage.textContent = "Thanks, " + username + "! Your review was submitted.";

  // clear old list and rebuild it
  allReviews.innerHTML = "";
  for (var i = 0; i < reviews.length; i++) {
    allReviews.innerHTML += "<p>" + reviews[i] + "</p>";
  }

  // clear form
  reviewForm.reset();
});
