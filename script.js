
document.querySelector('.change-location').addEventListener('click', () => {
  const newLocation = prompt('Enter your location:');
  if (newLocation) {
    document.getElementById('location').textContent = newLocation;
  }
});






// Banner Auto-Slide Animation
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

setInterval(() => {
  showSlide((currentSlide + 1) % slides.length);
}, 3000);

// Search Bar Functionality
const searchBar = document.querySelector('.search-bar input');
searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    alert(`Searching for: ${searchBar.value}`);
    searchBar.value = '';
  }
});

// Login Button Functionality
const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', () => {
  alert('Login feature coming soon!');
});

// My Cart Button Functionality
const cartBtn = document.querySelector('.cart-btn');
cartBtn.addEventListener('click', () => {
  alert('My Cart feature coming soon!');
});


// Function to handle category click
function showCategory(categoryName) {
    alert(`You selected: ${categoryName}`);
  }


  function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');
  
    products.forEach((product) => {
      const productName = product.getAttribute('data-name').toLowerCase();
      if (productName.includes(searchInput)) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
  }
  

  // Randomize animation durations and positions
document.querySelectorAll('.animated-bg div').forEach((item) => {
  const randomDuration = Math.random() * 5 + 3; // Random duration between 3 and 8 seconds
  const randomDelay = Math.random() * 2; // Random delay between 0 and 2 seconds
  const randomPositionX = Math.random() * 100; // Random horizontal position
  const randomPositionY = Math.random() * 100; // Random vertical position

  item.style.animationDuration = `${randomDuration}s`;
  item.style.animationDelay = `${randomDelay}s`;
  item.style.left = `${randomPositionX}%`;
  item.style.top = `${randomPositionY}%`;
});



document.getElementById("product-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const productName = document.getElementById("product-name").value;
  const productPrice = document.getElementById("product-price").value;
  const productStatus = document.getElementById("product-status").value;

  const productTable = document.getElementById("product-table-body");

  const row = productTable.insertRow();
  row.innerHTML = `
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productStatus}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  document.getElementById("product-form").reset();
  document.getElementById("product-success").textContent = "Product added successfully!";

  // Delete Functionality
  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
  });
});




document.getElementById("seller-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const sellerData = {
    fullName: document.getElementById("full-name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    accountNumber: document.getElementById("account-number").value,
    panCard: document.getElementById("pan-card").value,
    aadharCard: document.getElementById("aadhar-card").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  // Log data (In production, this should send data to the backend)
  console.log("Seller Data Collected:", sellerData);

  // Mock redirection to admin panel
  alert("Your information has been submitted successfully. Redirecting to Admin Panel...");
  window.location.href = "/admin-panel.html"; // Change this to your admin panel URL
});




let totalPrice = 0;

function addItem() {
  // Get item details from the input fields
  const itemName = document.getElementById('item-name').value;
  const itemPrice = parseFloat(document.getElementById('item-price').value);

  // Validate input
  if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Please enter a valid item name and price.");
    return;
  }

  // Create new list item
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${itemName} - $${itemPrice.toFixed(2)}</span>
    <button onclick="removeItem(this, ${itemPrice})">Delete</button>
  `;

  // Append new item to the grocery list
  document.getElementById('grocery-list').appendChild(listItem);

  // Update total price
  totalPrice += itemPrice;
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);

  // Clear input fields
  document.getElementById('item-name').value = '';
  document.getElementById('item-price').value = '';
}

function removeItem(button, price) {
  // Remove item from the list
  const listItem = button.parentElement;
  listItem.remove();

  // Update total price
  totalPrice -= price;
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function proceedToPayment() {
  if (totalPrice === 0) {
    alert("Your cart is empty. Please add items before proceeding to payment.");
    return;
  }

  alert(`Proceeding to payment... Total: $${totalPrice.toFixed(2)}`);
}

  