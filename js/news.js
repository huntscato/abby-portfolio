document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('dropdown-menu').classList.toggle('active');
});

/**** NEWS SECTION ****/

const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRZqfqH_kll43RLCCuTvrGPGchmu0UeZ81L5C0pHdLf9Z_XBjUeZg-rmc7sMKKzcpkgun0R63zmSlQ2/pub?output=csv';

async function init() {
  const response = await fetch(publicSpreadsheetUrl);
  const csvData = await response.text();

  // Parse the CSV data into an array of objects
  const posts = parseCSV(csvData);
  displayPosts(posts);
}

// Parse CSV data into an array of objects
function parseCSV(csv) {
  const rows = csv.split('\n');
  const headers = rows[0].split(',');

  console.log('Headers:', headers); // Check the headers

  const data = rows.slice(1).map(row => {
    const columns = row.split(',');
    let post = {};
    headers.forEach((header, index) => {
      post[header] = columns[index];
    });
    return post;
  });

  console.log('Parsed Data:', data); // Check the parsed data
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
    console.log('Post:', post); // Check each post object

    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const title = document.createElement('h2');
    title.textContent = post.Title || "No Title"; // Check if the title is missing
    postElement.appendChild(title);

    const date = document.createElement('p');
    date.classList.add('post-date');
    date.textContent = `Posted on: ${new Date(post.Date).toLocaleDateString()}`;
    postElement.appendChild(date);

    const content = document.createElement('div');
    content.classList.add('post-content');

    // Check if the Content exists
    if (post.Content) {
      content.innerHTML = post.Content;
    } else {
      content.innerHTML = "<p>No content available.</p>";
    }

    postElement.appendChild(content);

    const readMoreLink = document.createElement('a');
    readMoreLink.href = "#";
    readMoreLink.textContent = "Read more";
    readMoreLink.addEventListener('click', function(e) {
      e.preventDefault();
      content.classList.toggle('expanded');
      readMoreLink.textContent = content.classList.contains('expanded') ? "Read less" : "Read more";
    });
    postElement.appendChild(readMoreLink);

    newsList.appendChild(postElement);
  });
}

window.addEventListener('DOMContentLoaded', init);