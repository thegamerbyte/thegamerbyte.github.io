// Image Array (same folder as script.js and HTML)
const images_glorious_model_o_mouse = [
  "glorious_model_o_mouse_1.webp",
  "glorious_model_o_mouse_2.webp",
  "glorious_model_o_mouse_3.webp"
  // Add more like "image_3.jpg" here as needed
];
let currentImageIndex_glorious_model_o_mouse = 0;

// Define all classes as constants
const CLASSES_glorious_model_o_mouse = {
  CARD_WRAPPER: ".card-wrapper", // Main card wrapper
  CARD: ".card_glorious_model_o_mouse", // Main card container
  IMAGE_CONTAINER: ".image-container_glorious_model_o_mouse", // Image container
  IMAGE_WRAPPER: ".image-wrapper_glorious_model_o_mouse", // Image wrapper
  PRODUCT_IMAGE: ".product-image_glorious_model_o_mouse", // Image element
  PRODUCT_NAME: ".product-name_glorious_model_o_mouse", // Product name
  BUTTONS_CONTAINER: ".buttons-container_glorious_model_o_mouse", // Buttons container
  NAV_BUTTONS: ".nav-button_glorious_model_o_mouse", // Navigation buttons
  BUY_BUTTON: ".buy-button_glorious_model_o_mouse", // Buy button
};

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Preload all images to ensure they're cached
  images_glorious_model_o_mouse.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // DOM Elements
  const cardWrapper = document.querySelector(CLASSES_glorious_model_o_mouse.CARD_WRAPPER);
  const card = cardWrapper.querySelector(CLASSES_glorious_model_o_mouse.CARD);
  const productImage = card.querySelector(CLASSES_glorious_model_o_mouse.PRODUCT_IMAGE);
  const navButtons = card.querySelectorAll(CLASSES_glorious_model_o_mouse.NAV_BUTTONS);
  const prevButton = navButtons[0]; // First nav button ("<")
  const nextButton = navButtons[1]; // Second nav button (">")

  // Initialize with first image
  productImage.src = images_glorious_model_o_mouse[currentImageIndex_glorious_model_o_mouse];
  productImage.style.transform = "translateX(0)";
  productImage.style.opacity = "1"; // Ensure visible

  // Function to Update Image with Slide and Fade Animation
  function updateImage(direction) {
    let newIndex;
    if (direction === "next") {
      newIndex = (currentImageIndex_glorious_model_o_mouse + 1) % images_glorious_model_o_mouse.length;
    } else if (direction === "prev") {
      newIndex = (currentImageIndex_glorious_model_o_mouse - 1 + images_glorious_model_o_mouse.length) % images_glorious_model_o_mouse.length;
    }

    // Slide out the current image
    productImage.style.transition = "transform 0.2s ease-in, opacity 0.2s ease-in";
    productImage.style.transform = direction === "next" ? "translateX(-100%)" : "translateX(100%)";
    productImage.style.opacity = "0";

    // After slide-out, set the new src and prepare for slide-in
    setTimeout(() => {
      productImage.src = images_glorious_model_o_mouse[newIndex];
      productImage.style.transition = "none"; // Disable transition for reset
      productImage.style.transform = direction === "next" ? "translateX(100%)" : "translateX(-100%)";
      productImage.style.opacity = "0"; // Start faded out

      // Wait for the image to load before sliding in
      productImage.addEventListener("load", function loadHandler() {
        productImage.removeEventListener("load", loadHandler); // Clean up listener
        // Slide in and fade in the new image
        productImage.style.transition = "transform 0.2s ease-out, opacity 0.2s ease-out";
        productImage.style.transform = "translateX(0)";
        productImage.style.opacity = "1";
        currentImageIndex_glorious_model_o_mouse = newIndex;
      }, { once: true }); // Listener removes itself after firing
    }, 200); // Match slide-out duration (0.2s)
  }

  // Event Listeners
  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => updateImage("prev"));
    nextButton.addEventListener("click", () => updateImage("next"));
  } else {
    console.error("Navigation buttons not found!");
  }
});
