// Display cart items on page load
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
});

function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    const cartSummary = document.getElementById('cart-summary');
    
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<div class="empty-message">Your cart is empty. <a href="products.html">Continue shopping</a></div>';
        cartSummary.innerHTML = '';
        return;
    }
    
    // Build cart items HTML
    let cartHTML = '<div class="cart-items">';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="item-quantity">
                    <label>Quantity: 
                        <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)" style="width: 50px; padding: 5px;">
                    </label>
                    <span style="margin-left: 10px; font-weight: bold;">$${itemTotal.toFixed(2)}</span>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
    
    cartHTML += '</div>';
    cartContainer.innerHTML = cartHTML;
    
    // Build cart summary HTML
    let summaryHTML = `
        <div class="summary-row">
            <span>Subtotal:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Tax (10%):</span>
            <span>$${(total * 0.10).toFixed(2)}</span>
        </div>
        <div class="summary-row summary-total">
            <span>Total:</span>
            <span>$${(total * 1.10).toFixed(2)}</span>
        </div>
        <button class="checkout-btn" onclick="checkout()">Proceed to Checkout</button>
    `;
    
    cartSummary.innerHTML = summaryHTML;
}

function updateQuantity(index, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (newQuantity <= 0) {
        removeFromCart(index);
        return;
    }
    
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
        alert('Thank you for your order! This is a demo, so no actual payment will be processed.');
        localStorage.removeItem('cart');
        displayCart();
    }
}
