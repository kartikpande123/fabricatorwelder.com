lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

  const contactSection = document.getElementById('contact');

    // Add an event listener for mouseover (hover)
    contactSection.addEventListener('mouseover', function () {
      // Change background color and text color on hover
      contactSection.style.backgroundColor = '#0056b3'; // New background color
      contactSection.style.color = '#fff'; // New text color
    });

    // Add an event listener for mouseout (when the mouse leaves the section)
    contactSection.addEventListener('mouseout', function () {
      // Revert to the original background color and text color
      contactSection.style.backgroundColor = '#f5f5f5'; // Default background color
      contactSection.style.color = '#000'; // Default text color
    });


    document.addEventListener('DOMContentLoaded', () => {
        // Your JavaScript code here
      });







      