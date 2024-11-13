document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
      e.preventDefault();
      
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});