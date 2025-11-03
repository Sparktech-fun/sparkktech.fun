// JavaScript code for toggling the navigation menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (!hamburger || !navLinks) return;

    function toggleMenu() {
        const isOpen = navLinks.classList.contains('open');
        navLinks.classList.toggle('open', !isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
        document.body.classList.toggle('nav-open', !isOpen);
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close the menu when a link is clicked
    navLinks.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link) {
            toggleMenu();
        }
    });

    // Close the menu when the escape key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});