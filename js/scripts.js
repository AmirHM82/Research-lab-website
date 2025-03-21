// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const toggleButton = document.createElement('div');
    const navbar = document.querySelector('.navbar');

    toggleButton.innerHTML = '&#9776;';
    toggleButton.style.fontSize = '2rem';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.color = 'white';
    toggleButton.style.marginLeft = 'auto';
    toggleButton.style.padding = '10px';
    toggleButton.style.display = 'none';

    document.querySelector('.nav-container').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1000) {
            navLinks.classList.remove('active');
            toggleButton.style.display = 'none';
        } else {
            toggleButton.style.display = 'block';
        }
    });

    if (window.innerWidth <= 1000) {
        toggleButton.style.display = 'block';
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });

    navItems.forEach(function(navItem) {
        navItem.addEventListener('click', function() {
            // Only close the navbar if it's currently active
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});
