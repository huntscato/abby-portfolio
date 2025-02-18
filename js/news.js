document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('dropdown-menu').classList.toggle('active');
});

/**** NEWS SECTION ****/

document.addEventListener("DOMContentLoaded", function () {
    const newsList = document.getElementById("news-list");
  
    // Dummy data (this will later be replaced with API data)
    const articles = [
      {
        title: "Exciting New Photoshoot!",
        date: "February 10, 2025",
        content: "We recently had an amazing outdoor shoot in the mountains...",
      },
      {
        title: "Behind the Scenes: Studio Setup",
        date: "January 28, 2025",
        content: "A look into how we set up our latest indoor studio shoot...",
      },
    ];
  
    function renderNews() {
      newsList.innerHTML = ""; // Clear old content
      articles.forEach((article) => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
  
        newsItem.innerHTML = `
          <h2>${article.title}</h2>
          <p class="date">${article.date}</p>
          <p>${article.content}</p>
          <a href="#" class="read-more">Read More</a>
        `;
  
        newsList.appendChild(newsItem);
      });
    }
  
    renderNews(); // Load dummy data for now
  });