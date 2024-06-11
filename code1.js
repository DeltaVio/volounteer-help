// FAQ toggle functionality
const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
for (const item of faqItems) {
    const onClick = () => {
        item.classList.toggle('active'); // Toggle 'active' class on click
    };
    item.addEventListener('click', onClick);
}

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n); // Increment or decrement the slide index
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n); // Set the slide index to the current slide
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Wrap around if n is out of bounds
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show the current slide and add 'active' class to the corresponding dot
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active"); // Toggle 'cs-active' class for hamburger menu
    CSnavbarMenu.classList.toggle("cs-active"); // Toggle 'cs-active' class for navbar menu
    CSbody.classList.toggle("cs-open"); // Toggle 'cs-open' class for body
    
    // Update aria-expanded attribute
    ariaExpanded();
});

// Check and toggle aria-expanded attribute for mobile navigation
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    // Toggle aria-expanded attribute
    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// Add class to body after scrolling 100px for on-scroll animations
document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
        document.querySelector('body').classList.add('scroll'); // Add 'scroll' class when scrolled 100px
    } else {
        document.querySelector('body').classList.remove('scroll'); // Remove 'scroll' class when less than 100px
    }
});

// Dropdown toggle for mobile navigation
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('cs-active'); // Toggle 'cs-active' class for dropdown items
    };
    item.addEventListener('click', onClick);
}
