document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('dropdown-menu').classList.toggle('active');
});


/**** NEWS SECTION ****/

const originalUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRZqfqH_kll43RLCCuTvrGPGchmu0UeZ81L5C0pHdLf9Z_XBjUeZg-rmc7sMKKzcpkgun0R63zmSlQ2/pub?output=csv';
const urlWithProxy = `https://api.allorigins.win/get?url=${encodeURIComponent(originalUrl)}`;

async function init() {
  try {
    const response = await fetch(urlWithProxy);
    const data = await response.json();

    console.log("Raw Data from Proxy:", data);

    if (!data.contents) {
      console.error('No CSV content available.');
      return;
    }

    // Decode base64 if needed
    let decodedCSV = data.contents;

    if (decodedCSV.startsWith("data:text/csv;base64,")) {
      const base64String = decodedCSV.replace("data:text/csv;base64,", '');
      decodedCSV = atob(base64String);
    }

    console.log("Decoded CSV:", decodedCSV);

    // Parse and display
    const posts = parseCSV(decodedCSV);
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
  }
}

// Parse CSV data into an array of objects
function parseCSV(csv) {
  const rows = csv.trim().split('\n');
  const headers = rows[0].split(',');

  console.log('Headers:', headers);

  const data = rows.slice(1).map(row => {
    const columns = row.split(',');
    let post = {};
    headers.forEach((header, index) => {
      post[header.trim()] = columns[index]?.trim();
    });
    return post;
  });

  console.log('Parsed Data:', data);
  return data;
}

// Display posts
function displayPosts(data) {
  const newsList = document.getElementById("news-list");

  if (data.length === 0) {
    newsList.innerHTML = 'No news available.';
    return;
  }

  // Sort by date (newest first)
  data.sort((a, b) => new Date(b.Date) - new Date(a.Date));

  data.forEach(post => {
    console.log('Post:', post);

    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const title = document.createElement('h2');
    title.textContent = post.Title || "No Title";
    postElement.appendChild(title);

    const date = document.createElement('p');
    date.classList.add('post-date');
    date.textContent = `Posted on: ${new Date(post.Date).toLocaleDateString()}`;
    postElement.appendChild(date);

    const shortSummary = document.createElement('p');
    shortSummary.classList.add('short-summary');
    shortSummary.innerHTML = post['Short Summary'] || "<em>No short summary available.</em>";
    postElement.appendChild(shortSummary);

    const fullText = document.createElement('div');
    fullText.classList.add('full-text');
    fullText.innerHTML = post['Full Text'] || "<em>No full text available.</em>";
    postElement.appendChild(fullText);

    const readMoreLink = document.createElement('a');
    readMoreLink.href = "#";
    readMoreLink.textContent = "Read more";
    readMoreLink.addEventListener('click', function(e) {
      e.preventDefault();
      fullText.classList.toggle('expanded');
      readMoreLink.textContent = fullText.classList.contains('expanded') ? "Read less" : "Read more";
    });
    postElement.appendChild(readMoreLink);

    newsList.appendChild(postElement);
  });
}

window.addEventListener('DOMContentLoaded', init);