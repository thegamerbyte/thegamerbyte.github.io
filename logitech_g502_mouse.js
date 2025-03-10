// Image Array (same folder as script.js and HTML)
const images_logitech_g502_mouse = [
  "logitech_g502_mouse_1.webp",
  "logitech_g502_mouse_2.webp",
  "logitech_g502_mouse_3.webp",
  "logitech_g502_mouse_4.webp",
  "logitech_g502_mouse_5.webp"
];
let currentImageIndex_logitech_g502_mouse = 0;

// Define all classes as constants
const CLASSES_logitech_g502_mouse = {
  CARD_WRAPPER: ".card-wrapper", // Main card wrapper
  CARD: ".card_logitech_g502_mouse", // Main card container
  IMAGE_CONTAINER: ".image-container_logitech_g502_mouse", // Image container
  IMAGE_WRAPPER: ".image-wrapper_logitech_g502_mouse", // Image wrapper
  PRODUCT_IMAGE: ".product-image_logitech_g502_mouse", // Image element
  PRODUCT_NAME: ".product-name_logitech_g502_mouse", // Product name
  BUTTONS_CONTAINER: ".buttons-container_logitech_g502_mouse", // Buttons container
  NAV_BUTTONS: ".nav-button_logitech_g502_mouse", // Navigation buttons
  BUY_BUTTON: ".buy-button_logitech_g502_mouse", // Buy button
};

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const cardWrapper = document.querySelector(CLASSES_logitech_g502_mouse.CARD_WRAPPER);
  const card = cardWrapper.querySelector(CLASSES_logitech_g502_mouse.CARD);
  const productImage = card.querySelector(CLASSES_logitech_g502_mouse.PRODUCT_IMAGE);
  const navButtons = card.querySelectorAll(CLASSES_logitech_g502_mouse.NAV_BUTTONS);
  const prevButton = navButtons[0]; // First nav button ("<")
  const nextButton = navButtons[1]; // Second nav button (">")

  // Initialize with first image
  productImage.src = images_logitech_g502_mouse[currentImageIndex_logitech_g502_mouse];
  productImage.style.transform = "translateX(0)";
  productImage.style.opacity = "1"; // Ensure visible

  // Function to Update Image with Slide and Fade Animation
  function updateImage(direction) {
    let newIndex;
    if (direction === "next") {
      newIndex = (currentImageIndex_logitech_g502_mouse + 1) % images_logitech_g502_mouse.length;
    } else if (direction === "prev") {
      newIndex = (currentImageIndex_logitech_g502_mouse - 1 + images_logitech_g502_mouse.length) % images_logitech_g502_mouse.length;
    }

    // Enable transitions for slide-out and fade-out
    productImage.style.transition = "transform 0.2s ease-in, opacity 0.2s ease-in";

    // Slide out and fade out current image
    productImage.style.transform = direction === "next" ? "translateX(100%)" : "translateX(-100%)";
    productImage.style.opacity = "0"; // Fade out

    // After slide-out/fade-out, prepare and slide in/fade in new image
    setTimeout(() => {
      productImage.style.transition = "none"; // Disable transition for reset
      productImage.src = images_logitech_g502_mouse[newIndex];
      productImage.style.transform = direction === "next" ? "translateX(-100%)" : "translateX(100%)";
      productImage.style.opacity = "0"; // Start faded out

      productImage.offsetWidth; // Force reflow

      // Re-enable transitions with ease-out for slide-in and fade-in
      productImage.style.transition = "transform 0.2s ease-out, opacity 0.2s ease-out";
      productImage.style.transform = "translateX(0)"; // Slide in
      productImage.style.opacity = "1"; // Fade in
      currentImageIndex_logitech_g502_mouse = newIndex;
    }, 200); // Match CSS transition duration (0.2s)
  }

  // Event Listeners
  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => updateImage("prev"));
    nextButton.addEventListener("click", () => updateImage("next"));
  } else {
    console.error("Navigation buttons not found!");
  }
});
