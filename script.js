// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

console.log("Benjamin Abongo's Portfolio Loaded Successfully.");

document.getElementById('professional-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic validation / logic
    const name = document.getElementById('name').value;
    
    alert(`Thank you, ${name}. Your message has been sent to Benjamin Abongo's office.`);
    
    // Reset the form
    this.reset();

});
const mobileMenu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

// 1. Toggle Menu when clicking the hamburger
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Close Menu when clicking a link (so it doesn't stay open over the content)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
// Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// When the user scrolls down 300px from the top, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This makes the scroll nice and smooth
    });
});
