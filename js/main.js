const themeToggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;
const menuElement = document.getElementById('menu');

themeToggleButton.addEventListener('click', function () {
  // Toggle the 'dark-theme' class on the body and menu
  bodyElement.classList.toggle('dark-theme');
  menuElement.classList.toggle('dark-theme');

  // Update the button text based on the theme
  themeToggleButton.textContent = bodyElement.classList.contains('dark-theme') ? 'Switch to Light Theme' : 'Switch to Dark Theme';
});

// Set the button text on initial load
themeToggleButton.textContent = bodyElement.classList.contains('dark-theme') ? 'Switch to Light Theme' : 'Switch to Dark Theme';
