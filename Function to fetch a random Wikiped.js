// Function to fetch a random Wikipedia article
function fetchRandomArticle() {
  // Clear previous article content if any
  document.getElementById('articleContent').innerHTML = 'Loading...';

  // API request to fetch a random Wikipedia article
  fetch('https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&format=json')
    .then(response => response.json())
    .then(data => {
      const pages = data.query.pages;
      // Extract the first page ID
      const pageId = Object.keys(pages)[0];
      // Extract the article content
      const articleContent = pages[pageId].extract;
      // Display the article content
      document.getElementById('articleContent').innerHTML = articleContent;
    })
    .catch(error => {
      console.error('Error fetching random article:', error);
      document.getElementById('articleContent').innerHTML = 'Error fetching article. Please try again later.';
    });
}

// Event listener for the button click
document.getElementById('randomButton').addEventListener('click',// Function to fetch a random Wikipedia article using CORS Anywhere proxy
function fetchRandomArticle() {
  // Clear previous article content if any
  document.getElementById('articleContent').innerHTML = 'Loading...';

  // API request to fetch a random Wikipedia article via CORS Anywhere proxy
  fetch('https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&format=json')
    .then(response => response.json())
    .then(data => {
      const pages = data.query.pages;
      // Extract the first page ID
      const pageId = Object.keys(pages)[0];
      // Extract the article content
      const articleContent = pages[pageId].extract;
      // Display the article content
      document.getElementById('articleContent').innerHTML = articleContent;
    })
    .catch(error => {
      console.error('Error fetching random article:', error);
      document.getElementById('articleContent').innerHTML = 'Error fetching article. Please try again later.';
    });
}
);

