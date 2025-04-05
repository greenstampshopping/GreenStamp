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
    { id: 31, name: "TIMEX Watch 599", category: "watches", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/e/g/f/-original-imagrk9rypmyhjmq.jpeg?q=90&crop=false", link: "https://fkrt.co/Iwhybx" },
     { id: 32, name: "Trigger b1 799", category: "", image: "https://rukminim2.flixcart.com/image/750/900/xif0q/headphone/f/b/v/-original-imagywufhynhgt7x.jpeg?q=20&crop=false", link: "https://fktr.in/97WAIpw" },
    // skull pattern tshirt 
     { id: 33, name: "T-Shirt t1 ", category: "tshirts", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/e/f/2/l-hlts003000-highlander-original-imagzsdksmuvkrfg.jpeg?q=70&crop=false", link: "https://fktr.in/Unjn9Ss" },
    // blue shirt
     { id: 34, name: "Blue Shirt s1 ", category: "shirts", image: "https://rukminim2.flixcart.com/image/832/832/l2tcfbk0/shirt/e/e/e/l-khsh000750-ketch-original-image2psaexg4yym.jpeg?q=70&crop=false", link: "https://myntr.in/BE74jt" },
     // power - banks 
     { id: 35, name: "Power bank p1", category: "powerbank", image: "https://ambraneindia.com/cdn/shop/files/Purple_png.webp?v=1709538713&width=900", link: "https://fkrt.co/uK6CWN" },
     { id: 36, name: "Power bank p1", category: "powerbank", image: "https://ambraneindia.com/cdn/shop/files/Black_png_0852d69a-4c4b-490a-ad14-504432275667.webp?v=1709538713&width=900", link: "https://myntr.in/I68hq0" },
     { id: 37, name: "Power bank p1", category: "powerbank", image: "https://ambraneindia.com/cdn/shop/files/artboard_1_1.webp?v=1709538713&width=900", link: "https://fkrt.co/ruZrjg" },
     { id: 38, name: "Power bank p1", category: "powerbank", image: "https://ambraneindia.com/cdn/shop/files/Artboard2copy_jpg.webp?v=1709538713&width=900", link: "https://myntr.in/GKuOtd" },
    // 2 shirts 
    { id: 39, name: "Shirt Rs.239", category: "shirts", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/g/9/w/xxl-htsofb009flipkart-white-xxl-aadi-original-imagmqfxf82eqnhu.jpeg?q=70&crop=false", link: "https://fkrt.co/VC8W6Y" },
    { id: 40, name: "Shirt Rs.239", category: "shirts", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/2/f/r/2xl-ts-shirt1028-tanip-original-imah9ncynzhf2kaf.jpeg?q=70&crop=false", link: "https://fkrt.co/jtcExS" },
    { id: 41, name: "Watch ", category: "watches", image: "https://rukminim2.flixcart.com/image/832/832/kikluvk0-0/watch/z/n/o/as000010e-allen-solly-original-imafybxrbqgapybk.jpeg?q=70&crop=false", link: "https://fkrt.co/aiXUt1" },
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
    const newProducts = products.slice().reverse();
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
});
// Search functionality
if (document.getElementById("search-button")) {
    document.getElementById("search-button").addEventListener("click", () => {
        const searchTerm = document.getElementById("search-input").value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        displayProducts(filteredProducts, "all-products");
        if (document.getElementById("new-products")) {
            document.getElementById("new-products").style.display = "none"; // Hide newly added products
        }
    });
}
