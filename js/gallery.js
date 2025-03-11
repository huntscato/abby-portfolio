document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('dropdown-menu').classList.toggle('active');
});


/**** TEXT FADE ****/

document.addEventListener("DOMContentLoaded", function () {
    const textSpans = document.querySelectorAll("#animated-text > span");
    let index = 0;
  
    function showNextText() {
        if (index < textSpans.length) {
            let currentSpan = textSpans[index];
  
            currentSpan.style.visibility = "visible";
            currentSpan.classList.add("show");
  
            if (index === textSpans.length - 1) {
                return;
            }

            setTimeout(() => {
                currentSpan.classList.add("fade-out");
  
                setTimeout(() => {
                    currentSpan.style.visibility = "hidden";
                    currentSpan.classList.remove("show", "fade-out");
                    index++;
                    showNextText();
                }, 1000);
            }, 3000); 
        }
    }
  
    showNextText();
  });

/**** IMAGE ENLARGEMENT ****/

const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.lightbox .close');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.src; 
    lightbox.style.display = 'flex'; 
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});