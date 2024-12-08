// Get the cart popup, close button, and open cart button
const cartPopup = document.getElementById('cartPopup');
const closeButton = document.getElementById('closeButton');
const openCartBtn = document.getElementById('openCartBtn');

// Show the cart popup when the 'Open Cart' button is clicked
openCartBtn.addEventListener('click', function() {
    cartPopup.style.display = 'block';
});

// Hide the cart popup when the 'X' (close) button is clicked
closeButton.addEventListener('click', function() {
    cartPopup.style.display = 'none';
});
