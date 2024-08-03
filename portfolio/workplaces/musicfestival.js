// Get the popup element and trigger button/link
var popup = document.getElementById('popup');
var popupTrigger = document.getElementById('popup-trigger');

// Function to open the popup
function openPopup() {
    popup.style.display = 'flex'; // Display the popup
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none'; // Hide the popup
}

// Event listener to open popup when trigger is clicked
popupTrigger.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    openPopup(); // Call function to open the popup
});

// Close the popup when clicking outside of it
popup.addEventListener('click', function(event) {
    // Check if the clicked element is not the image inside popup-content
    if (event.target !== document.querySelector('.popup-content img')) {
        closePopup();
    }
});