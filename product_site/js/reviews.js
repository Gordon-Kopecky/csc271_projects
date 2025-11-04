// Name: Gordon Kopecky 
// Date: October 21st, 2025
// This script is an updated verison on my reviews page and collects a user's name and written review, then adds it to the page without refreshing.

let reviews = []; 

// DOM elements
const nameInput = document.getElementById("name");
const reviewInput = document.getElementById("review");
const reviewBtn = document.getElementById("reviewBtn");
const reviewMessage = document.getElementById("reviewMessage");
const allReviews = document.getElementById("allReviews");

reviewBtn.addEventListener("click", function () {

  const username = nameInput.value.trim();  
  const reviewText = reviewInput.value.trim(); 

  if (!username || !reviewText) {
    reviewMessage.textContent = "Please fill out both fields before submitting.";
    return;
  }

  const fullReview = username + ": " + reviewText; 
  reviews.push(fullReview);

  // confirmation message
  reviewMessage.textContent = `Thanks, ${username}! Your review was submitted.`;

  allReviews.innerHTML = ""; 
  for (let i = 0; i < reviews.length; i++) {
    allReviews.innerHTML += `<p>${reviews[i]}</p>`;
  }

  nameInput.value = "";
  reviewInput.value = "";
});
