// contentScript.js
const productData = { // Collect product info from the page
  title: document.title,
  url: window.location.href
};
chrome.runtime.sendMessage({ type: "PRODUCT_INFO", data: productData }); // Send it to the background script
