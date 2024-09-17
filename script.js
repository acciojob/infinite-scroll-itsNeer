// Initial variables to keep track of item count
let itemCount = 1;

// Function to add list items
function addListItems(count) {
  const list = document.getElementById('infi-list');

  // Add the specified number of list items
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = List Item ${itemCount};
    itemCount++;
    list.appendChild(li);
  }
}

// Check if the user scrolled to the bottom of the list
function handleScroll() {
  const list = document.getElementById('infi-list');

  // Check if the user is near the bottom of the list
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1) {
    addListItems(2); // Add 2 more items when near the bottom
  }
}

// Initialize by adding 10 items by default
addListItems(10);

// Add an event listener for scrolling on the list element
document.getElementById('infi-list').addEventListener('scroll', handleScroll);