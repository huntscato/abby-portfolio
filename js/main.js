/**** HOMEPAGE ****/

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('dropdown-menu').classList.toggle('active');
});

/**** SLIDESHQW ****/

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll("#slideshow img");
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active", "exit"); // Reset previous states
        if (i === index) {
          slide.classList.add("active"); // Make the current slide visible
        } else if (i === (index - 1 + slides.length) % slides.length) {
          slide.classList.add("exit"); // Exit the previous slide
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    showSlide(currentIndex); // Show the first image initially
    setInterval(nextSlide, 5000); // Change every 5 seconds
  });