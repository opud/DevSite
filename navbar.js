// To be executed after page has loaded
window.onload = function () {
// Get the current page URL
  const currentPageUrl = window.location.href;

// Scan navbar links
  const navLinks = document.querySelectorAll('#nav > li > a');

// Loop through the links and check if the URL contains the text in the link's href attribute
  for (const link of navLinks) {
    const linkUrl = link.href;
    if (currentPageUrl.includes(linkUrl)) {
      link.id = 'active'; // Add the 'active' id to the matching link
      break; // Exit the loop since we found the active link
    }
  }
}
