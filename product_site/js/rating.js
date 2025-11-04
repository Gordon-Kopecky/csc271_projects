// Name: Gordon Kopecky 
// Date: October 21st, 2025
// This script is an updated verion of my review site and collects a rating from 1–5, displays a message, and updates an average rating.

let ratingTotal = 0;
let ratingCount = 0;

// DOM selectors
const ratingOptions = document.getElementsByName("rating"); 
const rateBtn = document.getElementById("rateBtn");          
const ratingMessage = document.getElementById("ratingMessage");
const avgText = document.querySelector(".average-text");     


rateBtn.addEventListener("click", function () {
  
  let rating = null;

  for (let i = 0; i < ratingOptions.length; i++) {
    if (ratingOptions[i].checked) {
      rating = Number(ratingOptions[i].value); 
    }
  }

  if (rating === null) {
    ratingMessage.textContent = "Please select a rating before submitting.";
    return;
  }

  // update totals
  ratingTotal += rating;
  ratingCount += 1;

  // average
  const averageRating = ratingTotal / ratingCount;

  // update page text once finished 
  ratingMessage.textContent = `Thanks! You rated this page ${rating} stars.`;
  avgText.innerHTML = `Current average rating: <strong>${averageRating.toFixed(1)}</strong>`;
});

