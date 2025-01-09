document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-bar ul');
  
    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });

  const scrollContainer = document.querySelector('.scroll-container'); 

  const photos = [
    'img/abigail-underwater.png',
    'img/crystal-ball.png',
    'img/mushroom.png',
    'img/nature.png',
    'img/new-years-eve.png',
    'img/old-flames.png',
    'img/rocks.png',
    'img/secret-garden.png'
  ];

  function addPhotosToGallery() {
    photos.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo;
      img.alt = 'Photo fromt the gallery';
      scrollContainer.appendChild(img);
    });
  }

  addPhotosToGallery();