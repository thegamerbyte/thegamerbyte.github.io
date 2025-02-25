// Image Array (same folder as script.js and HTML)
const images_keychron_v4_keyboard = [
    "keychron_v4_keyboard_1.jpg",
    "keychron_v4_keyboard_2.jpg",
    "keychron_v4_keyboard_3.jpg",
    "keychron_v4_keyboard_4.jpg"
    // Add more like "image_3.jpg" here as needed
  ];
  let currentImageIndex_keychron_v4_keyboard = 0;
  
  // Define all classes as constants
  const CLASSES_keychron_v4_keyboard = {
    CARD_WRAPPER: ".card-wrapper", // Main card wrapper
    CARD: ".card_keychron_v4_keyboard", // Main card container
    IMAGE_CONTAINER: ".image-container_keychron_v4_keyboard", // Image container
    IMAGE_WRAPPER: ".image-wrapper_keychron_v4_keyboard", // Image wrapper
    PRODUCT_IMAGE: ".product-image_keychron_v4_keyboard", // Image element
    PRODUCT_NAME: ".product-name_keychron_v4_keyboard", // Product name
    BUTTONS_CONTAINER: ".buttons-container_keychron_v4_keyboard", // Buttons container
    NAV_BUTTONS: ".nav-button_keychron_v4_keyboard", // Navigation buttons
    BUY_BUTTON: ".buy-button_keychron_v4_keyboard", // Buy button
  };
  
  // Run when DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const cardWrapper = document.querySelector(CLASSES_keychron_v4_keyboard.CARD_WRAPPER);
    const card = cardWrapper.querySelector(CLASSES_keychron_v4_keyboard.CARD);
    const productImage = card.querySelector(CLASSES_keychron_v4_keyboard.PRODUCT_IMAGE);
    const navButtons = card.querySelectorAll(CLASSES_keychron_v4_keyboard.NAV_BUTTONS);
    const prevButton = navButtons[0]; // First nav button ("<")
    const nextButton = navButtons[1]; // Second nav button (">")
  
    // Initialize with first image
    productImage.src = images_keychron_v4_keyboard[currentImageIndex_keychron_v4_keyboard];
    productImage.style.transform = "translateX(0)";
    productImage.style.opacity = "1"; // Ensure visible
  
    // Function to Update Image with Slide and Fade Animation
    function updateImage(direction) {
      let newIndex;
      if (direction === "next") {
        newIndex = (currentImageIndex_keychron_v4_keyboard + 1) % images_keychron_v4_keyboard.length;
      } else if (direction === "prev") {
        newIndex = (currentImageIndex_keychron_v4_keyboard - 1 + images_keychron_v4_keyboard.length) % images_keychron_v4_keyboard.length;
      }
  
      // Enable transitions for slide-out and fade-out
      productImage.style.transition = "transform 0.2s ease-in, opacity 0.2s ease-in";
  
      // Slide out and fade out current image
      productImage.style.transform = direction === "next" ? "translateX(100%)" : "translateX(-100%)";
      productImage.style.opacity = "0"; // Fade out
  
      // After slide-out/fade-out, prepare and slide in/fade in new image
      setTimeout(() => {
        productImage.style.transition = "none"; // Disable transition for reset
        productImage.src = images_keychron_v4_keyboard[newIndex];
        productImage.style.transform = direction === "next" ? "translateX(-100%)" : "translateX(100%)";
        productImage.style.opacity = "0"; // Start faded out
  
        productImage.offsetWidth; // Force reflow
  
        // Re-enable transitions with ease-out for slide-in and fade-in
        productImage.style.transition = "transform 0.2s ease-out, opacity 0.2s ease-out";
        productImage.style.transform = "translateX(0)"; // Slide in
        productImage.style.opacity = "1"; // Fade in
        currentImageIndex_keychron_v4_keyboard = newIndex;
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