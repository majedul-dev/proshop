import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../actions/productAction";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Link } from "react-router-dom";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.createProduct
  );

  useEffect(() => {}, [success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        name,
        image,
        price,
        brand,
        category,
        countInStock,
        description,
      })
    );
  };
  return (
    <>
      <h2>Create A New Product</h2>
      <Link to='/admin/productlist'>
        <Button>Back To Product List</Button>
      </Link>
      <FormContainer>
        {loading && <Loader />}
        {error && <Message variant='danger'>{error}</Message>}
        {success && (
          <Message variant='success'>Product Created Successfully</Message>
        )}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Product Name'
              value={name}
              onChange={(e) => setName(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='price'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Product Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='image'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Image'
              value={image}
              onChange={(e) => setImage(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='brand'>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Product Brand'
              value={brand}
              onChange={(e) => setBrand(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='quantity'>
            <Form.Label>Count In Stock</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Product Quantity'
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='category'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Product Category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Product description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}></Form.Control>
          </Form.Group>
          <Button type='submit'>Create</Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default CreateProductScreen;
