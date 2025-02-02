document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-bar ul');
  
    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });
