// Simple demo to show alert when adding product to cart
document.querySelectorAll('.btn-add').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    const product = card.getAttribute('data-product');
    const price = card.getAttribute('data-price');
    alert(`Added "${product}" to cart for $${price}`);
  });
});

// FAQ Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const faqHeaders = document.querySelectorAll(".faq-group-header");

  faqHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const icon = header.querySelector("i");

      // Toggle visibility
      body.classList.toggle("open");

      // Toggle icon
      icon.classList.toggle("fa-plus");
      icon.classList.toggle("fa-minus");
    });
  });
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Optional: Close menu when a link is clicked
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});


