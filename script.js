// toggle image
const showImageContainer = document.getElementById("show-image");

const toggleImage = (src, button) => {
  showImageContainer.src = src;
  const buttons = document.querySelectorAll(".image-button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  // Add active class to the clicked button
  button.classList.add("active");
};

// Recent Projects js
// Get all gallery items and // Get all gallery items and previews
const items = document.querySelectorAll(".gallery__item-wrapper");
const previews = document.querySelectorAll(".gallery__preview-wrapper");

// Function to update the preview area
function updatePreview(selectedItem) {
  previews.forEach((preview) => {
    preview.style.display = preview.dataset.galleryItem === selectedItem ? "block" : "none";
    preview.style.animation = preview.dataset.galleryItem === selectedItem ? "image-fade-in .3s ease-in-out" : "image-fade-out .3s ease-in-out";
  });

  items.forEach((listItem) => {
    if (listItem.dataset.itemsItem === selectedItem) {
      listItem.classList.add("active");
    } else {
      listItem.classList.remove("active");
    }
  });
}

// Show the first item by default
updatePreview("1");

// Add click event listeners to each item
items.forEach((item) => {
  item.addEventListener("click", function () {
    const selectedItem = this.dataset.itemsItem;
    updatePreview(selectedItem);
  });
});
