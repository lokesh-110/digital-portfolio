// Smooth scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Form submission (Demo only)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
});