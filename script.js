// Sample Product Data with Images
const products = [
    // Fashion - Shirts
    { id: 1, name: "Casual Shirt", category: "shirts", image: "images/shirt1.jpg", link: "https://example.com/shirt1" },
    { id: 2, name: "Formal Shirt", category: "shirts", image: "images/shirt2.jpg", link: "https://example.com/shirt2" },
    { id: 3, name: "Printed Shirt", category: "shirts", image: "images/shirt3.jpg", link: "https://example.com/shirt3" },
    // Fashion - Pants
    { id: 4, name: "Jeans", category: "pants", image: "images/pants1.jpg", link: "https://example.com/pant1" },
    { id: 5, name: "Chinos", category: "pants", image: "images/pants2.jpg", link: "https://example.com/pant2" },
    { id: 6, name: "Cargo Pants", category: "pants", image: "images/pants3.jpg", link: "https://example.com/pant3" },
    // Fashion - T-Shirts
    { id: 10, name: "Plain T-Shirt", category: "tshirts", image: "images/tshirt1.jpg", link: "https://example.com/tshirt1" },
    { id: 11, name: "Graphic T-Shirt", category: "tshirts", image: "images/tshirt2.jpg", link: "https://example.com/tshirt2" },
    { id: 12, name: "Polo T-Shirt", category: "tshirts", image: "images/tshirt3.jpg", link: "https://example.com/tshirt3" },
    // Gifts
    { id: 16, name: "Personalized Mug", category: "gifts", image: "images/gift1.jpg", link: "https://example.com/gift1" },
    { id: 17, name: "Custom Photo Frame", category: "gifts", image: "images/gift2.jpg", link: "https://example.com/gift2" },
    { id: 18, name: "Scented Candle Set", category: "gifts", image: "images/gift3.jpg", link: "https://example.com/gift3" },
    { id: 19, name: "Handmade Jewelry Box", category: "gifts", image: "images/gift4.jpg", link: "https://example.com/gift4" },
    { id: 20, name: "Gourmet Gift Basket", category: "gifts", image: "images/gift5.jpg", link: "https://example.com/gift5" },
    { id: 21, name: "Customized Tote Bag", category: "gifts", image: "images/gift6.jpg", link: "https://example.com/gift6" },
    { id: 22, name: "Aromatherapy Diffuser", category: "gifts", image: "images/gift7.jpg", link: "https://example.com/gift7" },
    { id: 23, name: "Personalized Keychain", category: "gifts", image: "images/gift8.jpg", link: "https://example.com/gift8" },
    { id: 24, name: "DIY Craft Kit", category: "gifts", image: "images/gift9.jpg", link: "https://example.com/gift9" },
    { id: 25, name: "Customized Notebook", category: "gifts", image: "images/gift10.jpg", link: "https://example.com/gift10" },
    // Gadgets - Laptops
    { id: 26, name: "MacBook Pro", category: "laptops", image: "images/laptop1.jpg", link: "https://example.com/laptop1" },
    { id: 27, name: "Dell XPS", category: "laptops", image: "images/laptop2.jpg", link: "https://example.com/laptop2" },
    { id: 28, name: "HP Spectre", category: "laptops", image: "images/laptop3.jpg", link: "https://example.com/laptop3" },
    // Gadgets - Watches
    { id: 29, name: "Smart Watch", category: "watches", image: "images/watch1.jpg", link: "https://example.com/watch1" },
    { id: 30, name: "Analog Watch", category: "watches", image: "images/watch2.jpg", link: "https://example.com/watch2" },
    { id: 31, name: "Digital Watch", category: "watches", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_DR6C9GsDX7JhhNmgPTtje5dGXMp_SMaFg&s", link: "https://example.com/watch3" },
];

// Function to display products
function displayProducts(productsArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; // Ensure the container exists
    container.innerHTML = ""; // Clear the container
    productsArray.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <a href="${product.link}" target="_blank" class="buy-button">Buy Now</a>
        `;
        container.appendChild(productDiv);
    });
}

// Display all products on home page
if (document.getElementById("all-products")) {
    displayProducts(products, "all-products");
}

// Display newly added products (first 6 products for example)
if (document.getElementById("new-products")) {
    const newProducts = products.slice(-6).reverse();
    displayProducts(newProducts, "new-products");
}



// Filter products by category
document.querySelectorAll(".subcategories button").forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        const filteredProducts = products.filter(product => product.category === category);

        // Check if the button is inside the fashion, gifts, or gadgets section
        if (button.closest("#fashion")) {
            displayProducts(filteredProducts, "fashion-products");
        } else if (button.closest("#gifts")) {
            displayProducts(filteredProducts, "gifts-products");
        } else if (button.closest("#gadgets")) {
            displayProducts(filteredProducts, "gadgets-products");
        }
    });
})
}

// Sample Product Data
const products = [
    // Add your product data here
];

// Function to display products
function displayProducts(productsArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    productsArray.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <a href="${product.link}" target="_blank" class="buy-button">Buy Now</a>
        `;
        container.appendChild(productDiv);
    });
}

// Display all products on home page
if (document.getElementById("all-products")) {
    displayProducts(products, "all-products");
}

// Display newly added products (first 6 products for example)
if (document.getElementById("new-products")) {
    const newProducts = products.slice(-6).reverse();
    displayProducts(newProducts, "new-products");
}

// Filter products by category
document.querySelectorAll(".subcategories button").forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        const filteredProducts = products.filter(product => product.category === category);
        if (button.closest("#gadgets")) {
            displayProducts(filteredProducts, "gadgets-products");
        }
    });
});

// Search functionality
if (document.getElementById("search-button")) {
    document.getElementById("search-button").addEventListener("click", () => {
        const searchTerm = document.getElementById("search-input").value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        displayProducts(filteredProducts, "all-products");
        if (document.getElementById("new-products")) {
            document.getElementById("new-products").style.display = "none";
        }
    });
}
