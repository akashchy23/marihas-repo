document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.getElementById('response').textContent = 'Message sent successfully!';
      document.getElementById('response').style.color = 'green';
      this.reset();
    } else {
      document.getElementById('response').textContent = 'Please fill all fields.';
      document.getElementById('response').style.color = 'red';
    }
  });
  