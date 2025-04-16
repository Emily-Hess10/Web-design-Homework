const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (e) {
  let valid = true;

  // Validate Name
  if (!nameInput.value.trim() || !nameInput.value.includes(" ")) {
    nameError.style.display = "block";
    valid = false;
  } else {
    nameError.style.display = "none";
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  // Validate Message
  if (!messageInput.value.trim() || messageInput.value.length > 300) {
    messageError.style.display = "block";
    valid = false;
  } else {
    messageError.style.display = "none";
  }

  if (!valid) {
    e.preventDefault();
  }
});
