document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('dropdown-menu').classList.toggle('active');
});


/**** TEXT FADE ****/

document.addEventListener("DOMContentLoaded", function () {
    const textSpans = document.querySelectorAll("#animated-text span");
    const fullText = document.querySelector("#full-text");
    let index = 0;
  
    function showNextText() {
      if (index < textSpans.length) {
        let currentSpan = textSpans[index];
  
        // Show current span with fade-in effect
        currentSpan.style.visibility = "visible";
        currentSpan.classList.add("show");
  
        // Wait 2 seconds, then fade it out
        setTimeout(() => {
          currentSpan.classList.add("fade-out");
  
          // Wait for fade-out, then move to the next
          setTimeout(() => {
            currentSpan.style.visibility = "hidden";
            currentSpan.classList.remove("show", "fade-out");
            index++;
            showNextText();
          }, 1000); // Fade-out duration
        }, 2000); // Visible time before fading out
      } else {
        // Once all lines animate, show full static text with fade-in
        setTimeout(() => {
          fullText.style.display = "block";
          fullText.style.visibility = "visible";
          fullText.classList.add("fade-in"); // Apply fade-in animation
        }, 1000);
      }
    }
  
    showNextText();
  });