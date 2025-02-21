document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('dropdown-menu').classList.toggle('active');
});


/**** TEXT FADE ****/

document.addEventListener("DOMContentLoaded", function () {
  const textSpans = document.querySelectorAll("#animated-text span");
  let index = 0;

  function showNextText() {
      if (index < textSpans.length) {
          let currentSpan = textSpans[index];

          // Show current span with fade-in and scaling up
          currentSpan.style.visibility = "visible";
          currentSpan.classList.add("show");

          if (index === textSpans.length - 1) {
              // If it's the last span, don't fade it out—let it stay
              return;
          }

          // Wait for 2 seconds, then fade out towards the user
          setTimeout(() => {
              currentSpan.classList.add("fade-out");

              // Wait for fade-out, then move to the next
              setTimeout(() => {
                  currentSpan.style.visibility = "hidden";
                  currentSpan.classList.remove("show", "fade-out");
                  index++;
                  showNextText();
              }, 1000); // Fade-out duration
          }, 3000); // Visible time before fading out
      }
  }

  showNextText();
});