class ShoppingCart {
    constructor() {
        this.cart = {};
        this.taxRate = 0.125; // 12.5%
    }

    async fetchProductPrice(productName) {
        const response = await fetch(`http://localhost:3001/products/${productName}`);
        if (!response.ok) {
            throw new Error(`Could not fetch price for ${productName}`);
        }
        const product = await response.json();
        return product.price;
    }

    async addProduct(productName, quantity) {
        const price = await this.fetchProductPrice(productName);
        if (this.cart[productName]) {
            this.cart[productName].quantity += quantity;
        } else {
            this.cart[productName] = { quantity, price };
        }
    }

    calculateSubtotal() {
        return Object.values(this.cart).reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    calculateTax() {
        const subtotal = this.calculateSubtotal();
        return Math.round(subtotal * this.taxRate * 100) / 100; // Rounded to 2 decimal places
    }

    calculateTotal() {
        const subtotal = this.calculateSubtotal();
        const tax = this.calculateTax();
        return Math.round((subtotal + tax) * 100) / 100; // Rounded to 2 decimal places
    }

    getCartState() {
        return {
            cart: this.cart,
            subtotal: this.calculateSubtotal(),
            tax: this.calculateTax(),
            total: this.calculateTotal(),
        };
    }
}

// Export the class for testing
module.exports = ShoppingCart;
