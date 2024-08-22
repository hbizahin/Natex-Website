document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMenuButton = document.getElementById("close-mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  closeMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// JavaScript for phone number validation

document.getElementById("phone-number").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^0-9+]/g, "");
});

// Products
module.exports = {
  // ...
  plugins: [
    // ...
    require("@tailwindcss/aspect-ratio"),
  ],
};
