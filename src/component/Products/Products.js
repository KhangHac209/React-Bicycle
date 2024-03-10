import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Products.css";
import CardProduct from "../CardProduct/CardProduct";
import useFetch from "../../useFetch";
const Products = () => {
    const listProduct = useFetch("https://65e5c93dd7f0758a76e762d6.mockapi.io/product");

    return (
        <div className="products">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="brand">
                            <h2>Brand Products</h2>
                            <div className="inputSearch">
                                <input type="text" placeholder="Search Brand Products" />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <ul>
                                <li>Lapierre</li>
                                <li>Mondraker</li>
                                <li>Cruzee</li>
                                <li>Cube</li>
                                <li>Radon</li>
                                <li>Giant</li>
                            </ul>
                        </div>
                        <div className="brand">
                            <h2>Price</h2>
                            <div className="inputSearch">
                                <input type="text" placeholder="Search Price Products" />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <ul>
                                <li>0 - 100 $</li>
                                <li>100 $ - 200 $</li>
                                <li>200 $ - 300 $</li>
                                <li>300 $ - 400 $</li>
                                <li>400 $ - 500 $</li>
                                <li>500 $ - 100000 $ </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={9}>
                        <Row>
                            {listProduct &&
                                listProduct.map((item) => (
                                    <Col key={item.id} md={4}>
                                        <CardProduct id={item.id} key={item.id} discount={item.discount} thumb={item.thumb} brand={item.brand} price={item.price} name={item.name}></CardProduct>
                                    </Col>
                                ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Products;
