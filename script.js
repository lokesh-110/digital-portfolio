document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if (name === '' || email === '' || message === '') {
    status.textContent = 'Please fill in all fields.';
    status.style.color = 'red';
  } else {
    status.textContent = 'Message sent successfully!';
    status.style.color = 'green';
    
    // Reset form
    this.reset();
  }
});
