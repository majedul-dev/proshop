import React, { useEffect } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productAction";
import { getUserDetails } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";

import banner1 from "../img/banner-1.jpg";
import banner2 from "../img/banner-2.jpg";
import banner3 from "../img/banner-3.jpg";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(getUserDetails());
  }, [dispatch]);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={banner1} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={banner2} alt='Second slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={banner3} alt='Third slide' />
        </Carousel.Item>
      </Carousel>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} key={product._id}>
              <Product {...product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
