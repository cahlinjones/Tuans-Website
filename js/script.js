// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('active');
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Here you would normally send the data to your server
            // For now, we'll just show a success message
            console.log('Form submitted:', data);
            
            // Show success message
            const formSection = document.querySelector('.contact-form-section .container');
            formSection.innerHTML = `
                <div class="form-success">
                    <div class="success-icon">✓</div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for contacting Hair Lab SLC. We've received your message and will get back to you within 24 hours.</p>
                    <p style="margin-top: 2rem;">
                        <a href="contact.html" class="cta-button" style="display: inline-block; text-decoration: none;">Send Another Message</a>
                    </p>
                </div>
            `;
            
            // Scroll to success message
            formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});