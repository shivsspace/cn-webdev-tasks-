// Basic JavaScript functionality for the landing page

// Add to Cart Button Click Handler
const cartButton = document.querySelectorAll('.add-to-cart-btn');
let cartCount = 0;

cartButton.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.querySelector('.nav-links a:nth-child(3)').textContent = `Cart (${cartCount})`;
    alert('Product added to cart!');
  });
});
