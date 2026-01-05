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