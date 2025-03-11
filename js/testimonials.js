document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('dropdown-menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.testimonial-card');
  
  function handleScroll() {
    testimonials.forEach((testimonial, index) => {
      const rect = testimonial.getBoundingClientRect();
      
      // Check if the testimonial is in the viewport
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        // Apply classes based on index for alternating slide-in effect
        if (index % 2 === 0) {
          testimonial.classList.add('visible-left');
        } else {
          testimonial.classList.add('visible-right');
        }
      }
    });
  }

  // Trigger handleScroll initially and on scroll
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});

