document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE MENU LOGIC ---
    const mobileMenu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle between bars and X icon (Optional but professional)
            const icon = mobileMenu.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('active');
        });
    });

    // --- 2. SMOOTH SCROLLING ---
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only scroll smoothly if it's an internal link (starts with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // --- 3. SCROLL TO TOP BUTTON ---
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function() {
        if (scrollTopBtn) {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        }
    };

    scrollTopBtn?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // --- 4. FORM SUBMISSION ---
    const contactForm = document.getElementById('professional-form');
    contactForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}. Your message has been sent to Dr. Benjamin Abongo's office.`);
        this.reset();
    });

    console.log("Dr. Abongo's Portfolio scripts initialized.");
});
