# Shopping Cart Assignment

## Description
This project implements a simple shopping cart that allows users to add products, calculate totals, and retrieve product prices from a mock Price API. The cart supports adding multiple quantities of products and calculates the subtotal, tax, and total amounts.

## Features
- Add products to the cart with specified quantities.
- Retrieve product prices from a mock API.
- Calculate subtotal, tax, and total amounts.
- Unit tests to ensure functionality.

## Price API
The Price API is a mock HTTP service that returns the price details for products. To run the Price API, follow these steps:

1. Ensure you have `json-server` installed globally or as a development dependency. You can install it globally using:

   ```bash
   npm install -g json-server
   
Or install it locally in your project:

npm install --save-dev json-server


Start the Price API by running the following command in your project directory:

npm run serve-products
The API will be available at http://localhost:3001/.

Available Products
The following products are available in the Price API:

cheerios
cornflakes
frosties
shreddies
weetabix
Example Usage
You can modify the ShoppingCart.js file to add different products and quantities. Here’s an example of how to use the ShoppingCart class:

## javascript

const cart = new ShoppingCart();
await cart.addProduct('cornflakes', 2);
await cart.addProduct('weetabix', 1);
const state = cart.getCartState();
console.log(state);


# Expected Output
For the example above, the expected output will be:

## Cart contents: { cornflakes: { quantity: 2, price: 4.99 }, weetabix: { quantity: 1, price: 7.29 } }
## Subtotal: 17.27
## Tax: 2.16
## Total: 19.43

Assumptions
The Price API is running locally on http://localhost:3001/.
The db.json file contains the necessary product data.
The tax rate is fixed at 12.5%.
Trade-offs
The implementation uses a simple in-memory cart without persistent storage.
Error handling is basic and can be improved for production use.
Testing
Running the Tests
To run the unit tests, ensure you have Jest installed. You can install it as a development dependency by running:

npm install --save-dev jest
Then, run the tests using:

npm test
Testing the Solution

Start the Price API:
npm run serve-products
Conclusion
This project demonstrates a simple implementation of a shopping cart with basic functionalities. The code is structured to be straightforward and easy to understand, with unit tests to ensure correctness. Feel free to modify and extend the functionality as needed.


### Key Sections Explained

- Description: Provides an overview of the project and its purpose.
- Features: Lists the main functionalities of the shopping cart.
- Price API: Instructions on how to set up and run the mock Price API.
- Available Products: Lists the products available in the API.
- Example Usage: Shows how to use the `ShoppingCart` class with sample code and expected output.
- Assumptions: Lists any assumptions made during development.
- Trade-offs: Discusses design choices and limitations.
- Testing: Instructions on how to run tests and verify functionality.
- Conclusion: Summarizes the project and encourages further modifications.
