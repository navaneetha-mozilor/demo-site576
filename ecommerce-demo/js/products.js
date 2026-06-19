// Sample products data
const products = [
    { id: 1, name: 'Product 1', price: 29.99, description: 'High-quality product' },
    { id: 2, name: 'Product 2', price: 39.99, description: 'Premium quality item' },
    { id: 3, name: 'Product 3', price: 49.99, description: 'Best seller product' },
    { id: 4, name: 'Product 4', price: 59.99, description: 'Exclusive offering' }
];

// Display products on page load
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});

function displayProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>$${product.price.toFixed(2)}</strong></p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(product.name + ' added to cart!');
    }
}