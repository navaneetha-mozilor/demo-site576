// Load and display cart items
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
});

function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    const cartSummary = document.getElementById('cart-summary');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartSummary.innerHTML = '';
        return;
    }
    
    let cartHTML = '<table style="width: 100%; border-collapse: collapse;">';
    cartHTML += '<tr style="border-bottom: 2px solid #ddd;"><th>Product</th><th>Price</th><th>Action</th></tr>';
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartHTML += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><button onclick="removeFromCart(${index})">Remove</button></td>
            </tr>
        `;
    });
    
    cartHTML += '</table>';
    cartContainer.innerHTML = cartHTML;
    
    cartSummary.innerHTML = `
        <h3 style="margin-top: 2rem;">Cart Summary</h3>
        <p><strong>Total Items:</strong> ${cart.length}</p>
        <p><strong>Total Price:</strong> $${total.toFixed(2)}</p>
        <button onclick="checkout()" style="margin-top: 1rem;">Proceed to Checkout</button>
    `;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function checkout() {
    window.location.href = 'checkout.html';
}