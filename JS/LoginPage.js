// Get the close button and the page content element
const closeButton = document.getElementById('closeButton');
const pageContent = document.getElementById('loginPage');

// Add an event listener to close (hide) the page content when clicked
closeButton.addEventListener('click', function() {
    pageContent.style.display = 'none'; // Hides the content of the page
});

