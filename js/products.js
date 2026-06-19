// Sample products data
const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 999.99,
        description: 'High-performance laptop for work and gaming',
        emoji: '💻'
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 699.99,
        description: 'Latest model with advanced features',
        emoji: '📱'
    },
    {
        id: 3,
        name: 'Headphones',
        price: 199.99,
        description: 'Premium audio quality wireless headphones',
        emoji: '🎧'
    },
    {
        id: 4,
        name: 'Smart Watch',
        price: 299.99,
        description: 'Track your fitness and stay connected',
        emoji: '⌚'
    },
    {
        id: 5,
        name: 'Tablet',
        price: 499.99,
        description: 'Perfect for entertainment and productivity',
        emoji: '📱'
    },
    {
        id: 6,
        name: 'Camera',
        price: 1299.99,
        description: 'Professional quality digital camera',
        emoji: '📷'
    }
];

// Initialize products on page load
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-description">${product.description}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
});

function addToCart(id, name, price) {
    // Get existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show confirmation
    alert(`${name} added to cart!`);
}
