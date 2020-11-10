import Product from "../models/productModel.js";
import asyncHandeler from "express-async-handler";

export const getAllProducts = asyncHandeler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

export const getProductById = asyncHandeler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export const createProduct = asyncHandeler(async (req, res) => {
  const product = new Product({
    user: req.user._id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    brand: req.body.brand,
    description: req.body.description,
    price: req.body.price,
    countInStock: req.body.countInStock,
  });

  if (product) {
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } else {
    res.status(400).json({ message: "No Product Created" });
  }
});

export const deleteProduct = asyncHandeler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product Deleted" });
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

export const updateProduct = asyncHandeler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = req.body.name || product.name;
    product.image = req.body.image || product.image;
    product.category = req.body.category || product.category;
    product.brand = req.body.brand || product.brand;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.contInStock = req.body.contInStock || product.contInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

export const productReviews = asyncHandeler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.reviews.map((review) => {
      review.name = req.body.name;
      review.rating = req.body.rating;
      review.comment = req.body.comment;
    });

    const productReview = await product.save();
    res.json(productReview);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
