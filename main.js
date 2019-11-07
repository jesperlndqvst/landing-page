// Function toggles between class names to show/hide menu items.
function toggleMenu(event) {
	const menuItems = event.currentTarget.parentElement.querySelector('.mobile-nav-items');
	menuItems.classList.toggle('show-menu');
}

// Add onclick event to element with class name "hamburger-icon".
document.getElementsByClassName('hamburger-icon')[0].onclick = toggleMenu;