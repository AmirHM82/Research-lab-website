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

document.addEventListener('DOMContentLoaded', function () {
    const imagePaths = [
        'images/Gallery/20240309_115334.jpg',
        'images/Gallery/20240309_115341.jpg',
        'images/Gallery/20240309_115346.jpg',
        'images/Gallery/20240309_115400.jpg',
        'images/Gallery/20240309_115457.jpg',
        'images/Gallery/20240309_115539.jpg',
        'images/Gallery/20240309_115629.jpg',
        'images/Gallery/20240309_115701.jpg',
        'images/Gallery/20240309_115808.jpg',
        'images/Gallery/20240309_115815.jpg',
        'images/Gallery/20240309_115834.jpg',
        'images/Gallery/20240309_115857.jpg',
        'images/Gallery/20240309_115912.jpg',
        'images/Gallery/20240309_115920.jpg',
        'images/Gallery/20240309_115929.jpg',
        'images/Gallery/20240309_115936.jpg',
        'images/Gallery/20240309_115944.jpg',
        'images/Gallery/20240309_115958.jpg',
        'images/Gallery/20240309_120019.jpg',
        'images/Gallery/20240309_120025.jpg',
        'images/Gallery/20240309_120046.jpg',
        'images/Gallery/20240309_120053.jpg',
        'images/Gallery/20240309_120114.jpg',
        'images/Gallery/20240309_120126.jpg',
        'images/Gallery/20240309_120141.jpg',
        'images/Gallery/20240309_120158.jpg',
        'images/Gallery/20240309_120218.jpg',
        'images/Gallery/20240309_120231.jpg',
        'images/Gallery/20240309_120237.jpg',
        'images/Gallery/20240309_120246.jpg',
        'images/Gallery/20240309_120307.jpg',
        'images/Gallery/20240309_120315.jpg',
        'images/Gallery/20240309_120325.jpg',
        'images/Gallery/20240309_120332.jpg',
        'images/Gallery/20240309_120343.jpg',
        'images/Gallery/20240309_120351.jpg',
        'images/Gallery/20240309_120405.jpg',
        'images/Gallery/20240309_120410.jpg',
        'images/Gallery/20240309_120415.jpg',
        'images/Gallery/20240309_120424.jpg',
        'images/Gallery/20240309_120432.jpg',
        'images/Gallery/20240309_120443.jpg',
        'images/Gallery/20240309_120511.jpg',
        'images/Gallery/20240309_120520.jpg',
        'images/Gallery/20240309_120547.jpg',
        'images/Gallery/20240309_120601.jpg',
        'images/Gallery/20240309_120607.jpg',
        'images/Gallery/20240309_120621.jpg',
        'images/Gallery/20240309_120627.jpg',
        'images/Gallery/20240309_120634.jpg',
        'images/Gallery/20240309_120812.jpg',
        'images/Gallery/20240309_120826.jpg',
        'images/Gallery/20240309_120831.jpg',
        'images/Gallery/20240309_121100.jpg',
        'images/Gallery/20240309_121135.jpg',
        'images/Gallery/20240309_121217.jpg',
        'images/Gallery/20240309_121943.jpg',
        'images/Gallery/20240309_183243.jpg',
        'images/Gallery/20240309_183257.jpg',
        // Add more image paths as needed
    ];

    const slider = document.querySelector('.gallery-slider');

    // Dynamically add images to the slider
    imagePaths.forEach(src => {
        const slide = document.createElement('div');
        slide.classList.add('gallery-slide');
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Gallery image';
        slide.appendChild(img);
        slider.appendChild(slide);
    });

    const slides = document.querySelectorAll('.gallery-slide');
    const totalSlides = slides.length; // Moved here
    let currentIndex = 0;
    const intervalTime = 5000; // Interval time in milliseconds
    let slideInterval;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0; // Loop back to the first slide
        } else if (index < 0) {
            currentIndex = totalSlides - 1; // Loop to the last slide
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }    

    function startSlideShow() {
        slideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, intervalTime);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    document.querySelector('.gallery-prev').addEventListener('click', function() {
        stopSlideShow();
        showSlide(currentIndex - 1);
        startSlideShow();
    });

    document.querySelector('.gallery-next').addEventListener('click', function() {
        stopSlideShow();
        showSlide(currentIndex + 1);
        startSlideShow();
    });

    const sliderContainer = document.querySelector('.gallery-slider-container');
    sliderContainer.addEventListener('mouseenter', stopSlideShow);
    sliderContainer.addEventListener('mouseleave', startSlideShow);

    startSlideShow();
});

document.getElementById('searchBox').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    let profiles = document.querySelectorAll('.teacher-profile');

    profiles.forEach(function(profile) {
      let department = profile.getAttribute('data-department').toLowerCase();
      if (department.includes(searchQuery)) {
        profile.style.display = 'block';
      } else {
        profile.style.display = 'none';
      }
    });
});

function truncateTitles() {
    const isMobile = window.innerWidth <= 768;
    const titleCells = document.querySelectorAll('.table-cell');

    titleCells.forEach(cell => {
        const fullText = cell.getAttribute('data-full') || cell.textContent;
        if (isMobile) {
            const words = fullText.split(" ");
            const shortText = words.slice(0, 3).join(" ") + (words.length > 3 ? "..." : "");
            cell.setAttribute('data-full', fullText); // store original
            cell.textContent = shortText;
        } else {
            if (cell.getAttribute('data-full')) {
                cell.textContent = cell.getAttribute('data-full');
            }
        }
    });
}

// Run on load and resize
window.addEventListener('load', truncateTitles);
window.addEventListener('resize', truncateTitles);