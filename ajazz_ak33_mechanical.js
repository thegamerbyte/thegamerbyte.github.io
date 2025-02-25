// Image Array (same folder as script.js and HTML)
const images_ajazz_ak33_mechanical = [
    "ajazz_ak33_mechanical_1.jpg",
    "ajazz_ak33_mechanical_2.jpg",
    "ajazz_ak33_mechanical_3.jpg"
    // Add more like "image_3.jpg" here as needed
  ];
  let currentImageIndex_ajazz_ak33_mechanical = 0;
  
  // Define all classes as constants
  const CLASSES_ajazz_ak33_mechanical = {
    CARD_WRAPPER: ".card-wrapper", // Main card wrapper
    CARD: ".card_ajazz_ak33_mechanical", // Main card container
    IMAGE_CONTAINER: ".image-container_ajazz_ak33_mechanical", // Image container
    IMAGE_WRAPPER: ".image-wrapper_ajazz_ak33_mechanical", // Image wrapper
    PRODUCT_IMAGE: ".product-image_ajazz_ak33_mechanical", // Image element
    PRODUCT_NAME: ".product-name_ajazz_ak33_mechanical", // Product name
    BUTTONS_CONTAINER: ".buttons-container_ajazz_ak33_mechanical", // Buttons container
    NAV_BUTTONS: ".nav-button_ajazz_ak33_mechanical", // Navigation buttons
    BUY_BUTTON: ".buy-button_ajazz_ak33_mechanical", // Buy button
  };
  
  // Run when DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const cardWrapper = document.querySelector(CLASSES_ajazz_ak33_mechanical.CARD_WRAPPER);
    const card = cardWrapper.querySelector(CLASSES_ajazz_ak33_mechanical.CARD);
    const productImage = card.querySelector(CLASSES_ajazz_ak33_mechanical.PRODUCT_IMAGE);
    const navButtons = card.querySelectorAll(CLASSES_ajazz_ak33_mechanical.NAV_BUTTONS);
    const prevButton = navButtons[0]; // First nav button ("<")
    const nextButton = navButtons[1]; // Second nav button (">")
  
    // Initialize with first image
    productImage.src = images_ajazz_ak33_mechanical[currentImageIndex_ajazz_ak33_mechanical];
    productImage.style.transform = "translateX(0)";
    productImage.style.opacity = "1"; // Ensure visible
  
    // Function to Update Image with Slide and Fade Animation
    function updateImage(direction) {
      let newIndex;
      if (direction === "next") {
        newIndex = (currentImageIndex_ajazz_ak33_mechanical + 1) % images_ajazz_ak33_mechanical.length;
      } else if (direction === "prev") {
        newIndex = (currentImageIndex_ajazz_ak33_mechanical - 1 + images_ajazz_ak33_mechanical.length) % images_ajazz_ak33_mechanical.length;
      }
  
      // Enable transitions for slide-out and fade-out
      productImage.style.transition = "transform 0.2s ease-in, opacity 0.2s ease-in";
  
      // Slide out and fade out current image
      productImage.style.transform = direction === "next" ? "translateX(100%)" : "translateX(-100%)";
      productImage.style.opacity = "0"; // Fade out
  
      // After slide-out/fade-out, prepare and slide in/fade in new image
      setTimeout(() => {
        productImage.style.transition = "none"; // Disable transition for reset
        productImage.src = images_ajazz_ak33_mechanical[newIndex];
        productImage.style.transform = direction === "next" ? "translateX(-100%)" : "translateX(100%)";
        productImage.style.opacity = "0"; // Start faded out
  
        productImage.offsetWidth; // Force reflow
  
        // Re-enable transitions with ease-out for slide-in and fade-in
        productImage.style.transition = "transform 0.2s ease-out, opacity 0.2s ease-out";
        productImage.style.transform = "translateX(0)"; // Slide in
        productImage.style.opacity = "1"; // Fade in
        currentImageIndex_ajazz_ak33_mechanical = newIndex;
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