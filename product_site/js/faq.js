// Name: Gordon Kopecky 
// Date: October 21st, 2025
// Description: Handles the FAQ form events. Gives feedback when the
// user focuses, leaves, and submits the form.

// get DOM elements
var faqForm = document.getElementById("faqForm");
var faqNameInput = document.getElementById("name");
var faqQuestionInput = document.getElementById("question");
var faqMessage = document.getElementById("faqMessage");

// make sure elements exist
if (faqForm && faqNameInput && faqQuestionInput && faqMessage) {

  // when user clicks into the name field
  faqNameInput.addEventListener("focus", function () {
    faqMessage.textContent = "Please enter your full name. It cannot be blank.";
  });

  // when user clicks into the question field
  faqQuestionInput.addEventListener("focus", function () {
    faqMessage.textContent = "Ask your question here. Try to write at least 10 characters.";
  });
// blur
  faqNameInput.addEventListener("blur", function () {
    var nameValue = faqNameInput.value.trim();

    if (nameValue === "") {
      faqMessage.textContent = "Name cannot be blank. Please enter your name.";
    } else {
      faqMessage.textContent = "";
    }
  });

  faqQuestionInput.addEventListener("blur", function () {
    var questionValue = faqQuestionInput.value.trim();

    if (questionValue.length < 10) {
      faqMessage.textContent = "Your question is too short. Please add a bit more detail.";
    } else {
      faqMessage.textContent = "";
    }
  });
// submit
  faqForm.addEventListener("submit", function (event) {
    // prevent the form's default behavior (page refresh)
    event.preventDefault();

    var nameValue = faqNameInput.value.trim();
    var questionValue = faqQuestionInput.value.trim();

    // basic validation before accepting
    if (nameValue === "") {
      faqMessage.textContent = "Please enter your name before submitting.";
      return;
    }

    if (questionValue.length < 10) {
      faqMessage.textContent = "Your question must be at least 10 characters long.";
      return;
    }

    // if we get here, input is valid
    faqMessage.textContent = "Thank you, " + nameValue + ". Your question has been recorded.";

    // clear the form after successful submit
    faqForm.reset();
  });
}
