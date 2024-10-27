const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// POST endpoint to calculate total value of products
app.post("/total", (req, res) => {
  const products = req.body.products; // Expecting an array of products

  // Check if the products array is provided
  if (!products || !Array.isArray(products)) {
    return res.status(400).json({ message: "Invalid product list" });
  }

  // Calculate total value (price * quantity for each product)
  const totalValue = products.reduce((acc, product) => {
    const { price, quantity } = product;
    return acc + price * quantity;
  }, 0);

  // Return the total value as a response
  return res.json({ totalValue });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
