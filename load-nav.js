// Load nav.html content into nav-placeholder
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
      placeholder.innerHTML = data;
      
      // Mark the active link
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = placeholder.querySelectorAll('nav a');
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
    }
  })
  .catch(error => console.error('Error loading nav:', error));
