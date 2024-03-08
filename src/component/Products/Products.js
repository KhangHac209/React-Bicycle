import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Products.css";
const Products = () => {
    return (
        <div className="products">
            <Container>
                <Row>
                    <Col>
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Products;
