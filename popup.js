function loadItems(){
    chrome.storage.local.get({ items: [] }, function (result) { // Default to empty array if no items 
        const items = result.items; // Retrieve existing items
        const itemsList = document.getElementById("itemsList"); // Assuming there's a <ul> or <div> with id="itemsList" in popup.html
        itemsList.innerHTML = ""; // Clear existing items

        items.forEach(function(item){
            const row = document.createElement("div");
            row.textContent = `${item.itemName} - ${item.price} - ${item.link} - ${item.tags} - ${item.notes}`;
            itemsList.appendChild(row);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadItems(); // Load and display items when the popup is opened
  const saveButton = document.getElementById("saveButton"); // Defining the saveButton variable

  saveButton.addEventListener("click", function () { // Adding event listener to the save button
    // get values from the form
    const itemName = document.getElementById("itemName").value;
    const price = document.getElementById("price").value;
    const link = document.getElementById("link").value;
    const tags = document.getElementById("tags").value;
    const notes = document.getElementById("notes").value;

    // make one object that holds the data save in console
    const item = { itemName, price, link, tags, notes };
    console.log("Item to save:", item);

    // get existing list from storage, add this one, then save back
    chrome.storage.local.get({ items: [] }, function (result) { // Default to empty array if no items
      const items = result.items; // Retrieve existing items
      items.push(item); // Add new item to the array
      chrome.storage.local.set({ items }, function () { // Save updated array back to storage
        console.log("Item saved successfully!"); // Confirmation message
        // Add a confrmation message to the popup
      });
    });
  });
});
