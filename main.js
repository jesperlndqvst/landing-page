const hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
// Function toggles between class names to show/hide menu items.
function toggleMenu(event) {
    const menuItems = event.currentTarget.parentElement.querySelector('.menu-items');
    menuItems.classList.toggle('show-menu');
}

// Add onclick event to element with class name "hamburger-icon".
hamburgerIcon.onclick = toggleMenu;

//Animate hamburger menu icon
hamburgerIcon.addEventListener("click", function(){
    hamburgerIcon.classList.toggle("change");
})
