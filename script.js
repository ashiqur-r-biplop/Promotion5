// toggle image
const showImageContainer = document.getElementById("show-image");

const toggleImage = (src, button) => {
  showImageContainer.src = src;
  const buttons = document.querySelectorAll(".image-button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  // Add active class to the clicked button
  button.classList.add("active");
};
