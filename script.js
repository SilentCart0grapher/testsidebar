// Get DOM elements for the main sidebar toggle button, close button, sidebar, and square buttons
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');
const sidebar = document.querySelector('.sidebar');
const squareButtons = document.querySelectorAll('.square-button');

// Function to toggle the main sidebar and update the toggle button text
function toggleSidebar() {
  const mainSidebarOpen = sidebar.classList.toggle('open');
  updateToggleButtonText();

  // Dehighlight square buttons and hide their sidebars
  squareButtons.forEach((button) => {
    button.classList.remove('highlighted');
    const sidebarId = 'sidebar-' + button.id.split('-')[1];
    const targetSidebar = document.getElementById(sidebarId);
    targetSidebar.classList.remove('open');
  });
}

// Function to update the toggle button text based on the main sidebar's state
function updateToggleButtonText() {
  if (sidebar.classList.contains('open')) {
    sidebarToggle.textContent = 'Close Sidebar';
  } else {
    sidebarToggle.textContent = 'Open Sidebar';
  }
}

// Function to highlight the clicked square button and show its corresponding sidebar
function highlightSquareButton(clickedButton) {
  squareButtons.forEach((button) => {
    const sidebarId = 'sidebar-' + button.id.split('-')[1];
    const targetSidebar = document.getElementById(sidebarId);

    if (button === clickedButton) {
      button.classList.toggle('highlighted');
      targetSidebar.classList.toggle('open');
    } else {
      button.classList.remove('highlighted');
      targetSidebar.classList.remove('open');
    }
  });
}

// Add event listeners for the main sidebar toggle and close buttons
sidebarToggle.addEventListener('click', toggleSidebar);
sidebarClose.addEventListener('click', toggleSidebar);

// Add event listeners for the square buttons to highlight them and show their sidebars
squareButtons.forEach((button) => {
  button.addEventListener('click', () => highlightSquareButton(button));
});