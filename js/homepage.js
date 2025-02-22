

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('dropdown-menu').classList.toggle('active');
});



/**** SLIDESHQW ****/

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll("#slideshow img");
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active", "exit"); 
        if (i === index) {
          slide.classList.add("active"); 
        } else if (i === (index - 1 + slides.length) % slides.length) {
          slide.classList.add("exit"); 
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    showSlide(currentIndex); 
    setInterval(nextSlide, 4000); 
  });

  
  
  /**** TESTIMONIAL SCROLL ****/

  document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;
  
    function showNextTestimonial() {
      testimonials.forEach((t) => t.classList.remove("show", "hide"));
  
      const current = testimonials[index];
      current.classList.add("show"); 
  
      setTimeout(() => {
        current.classList.add("hide"); 
      }, 4000); 
  
      index = (index + 1) % testimonials.length;
    }
  
    setInterval(showNextTestimonial, 5000); 
    showNextTestimonial(); 
  });
