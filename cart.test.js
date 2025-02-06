const fetch = require('node-fetch'); 
jest.mock('node-fetch');

const ShoppingCart = require('./cart');

describe('ShoppingCart', () => {
    let cart;

    beforeEach(() => {
        cart = new ShoppingCart();
        jest.clearAllMocks(); // Clear previous mocks before each test
    });

    test('should add products to the cart and calculate totals correctly', async () => {
        // Mock fetch response for cornflakes
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ price: 4.99 }),
        });

        await cart.addProduct('cornflakes', 2);

        // Mock fetch response for weetabix
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ price: 7.29 }),
        });

        await cart.addProduct('weetabix', 1);

        const state = cart.getCartState();

        // Debugging: Ensure Jest waits before logging
        await new Promise((resolve) => setTimeout(resolve, 100));

        console.log('Cart contents:', state.cart);
        console.log('Subtotal:', state.subtotal);
        console.log('Tax:', state.tax);
        console.log('Total:', state.total);

        // Assertions
        expect(state.cart).toEqual({
            cornflakes: { quantity: 2, price: 4.99 },
            weetabix: { quantity: 1, price: 7.29 },
        });
        expect(state.subtotal).toBe(17.27);
        expect(state.tax).toBe(2.16);
        expect(state.total).toBe(19.43);
    });

    test('should throw an error when fetching product price fails', async () => {
        fetch.mockResolvedValueOnce({ ok: false });

        await expect(cart.addProduct('invalidProduct', 1))
            .rejects.toThrow('Could not fetch price for invalidProduct');
    });
});
