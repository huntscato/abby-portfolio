document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('dropdown-menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeOnLoadElements = document.querySelectorAll('.fade-in-onload');
  
    const firstImage = document.querySelector('#about img');
    const firstParagraph = document.querySelector('#about p');
  
    firstImage.classList.add('visible');
    firstParagraph.classList.add('visible');
  
    function isElementInView(element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
  
    function checkElements() {
      fadeElements.forEach(function(element) {
        if (isElementInView(element)) {
          element.classList.add('visible');
        }
      });
    }
  
    fadeOnLoadElements.forEach(function(element) {
        element.classList.add('visible');
    });

    window.addEventListener('scroll', checkElements);
  
    checkElements();
});