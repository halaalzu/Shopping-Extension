{
    chrome.runtime.onInstalled.addListener(() => {
  console.log("Background service worker is running!");
});

}
chrome.runtime.onMessage.addListener((message, sender) => { // Listen for messages from content scripts
  if (message.type === "PRODUCT_INFO") { // Check message type
    console.log("Got product data from content script:", message.data); // Log received data
    chrome.storage.local.set({ lastProduct: message.data }); // Save the data to local storage
  }
});
