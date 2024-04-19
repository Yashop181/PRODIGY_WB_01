document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
  
    mobileMenu.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  
    window.addEventListener('scroll', function() {
      const scrollPos = window.scrollY;
      const header = document.querySelector('header');
      if (scrollPos > 50) {
        header.style.backgroundColor = '#4DE713';
      } else {
        header.style.backgroundColor = '#333';
      }
    });
  });
  