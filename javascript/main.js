// Simple demo to show alert when adding product to cart
document.querySelectorAll('.btn-add').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    const product = card.getAttribute('data-product');
    const price = card.getAttribute('data-price');
    alert(`Added "${product}" to cart for $${price}`);
  });
});
