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

let customCurrentIndex = 0;
const customSlides = document.querySelectorAll(".custom-slide");
const customTotalSlides = customSlides.length;
const customCarousel = document.querySelector(".custom-carousel");

// Automatic slide change every 3 seconds (3000ms)
const slideInterval = setInterval(() => {
    customCurrentIndex = (customCurrentIndex + 1) % customTotalSlides;
    updateCustomCarousel();
}, 5000); // Adjust time as needed (e.g., 3000ms = 3 seconds)

// Manually navigate to next slide
document.querySelector(".custom-next").addEventListener("click", () => {
    customCurrentIndex = (customCurrentIndex + 1) % customTotalSlides;
    updateCustomCarousel();
});

// Manually navigate to previous slide
document.querySelector(".custom-prev").addEventListener("click", () => {
    customCurrentIndex = (customCurrentIndex - 1 + customTotalSlides) % customTotalSlides;
    updateCustomCarousel();
});

// Function to update carousel position
function updateCustomCarousel() {
    customCarousel.style.transform = `translateX(-${customCurrentIndex * 100}%)`;
}
