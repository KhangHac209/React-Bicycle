import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Button from "../Button/Button";
import "./CartProduct.css";
import Order from "../Order/Order";
const CartProduct = () => {
    return (
        <div className="cart">
            <Container>
                <Row>
                    <Col lg={12} md={12}></Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name Product</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mountain Bike Pedals</td>
                                <td>
                                    <img src="https://htmldemo.net/rideo/rideo/img/cart/1.jpg" alt="" />
                                </td>
                                <td>
                                    <div className="plus-minus">
                                        <i class="fa-solid fa-minus"></i>
                                        <input type="text" value={1} />
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </td>
                                <td>100.000 $</td>
                                <td>
                                    <i class="fa-solid fa-trash"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Mountain Bike Pedals</td>
                                <td>
                                    <img src="https://htmldemo.net/rideo/rideo/img/cart/1.jpg" alt="" />
                                </td>
                                <td>
                                    <div className="plus-minus">
                                        <i class="fa-solid fa-minus"></i>
                                        <input type="text" value={1} />
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </td>
                                <td>100.000 $</td>
                                <td>
                                    <i class="fa-solid fa-trash"></i>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Col>
                        <div className="total">
                            <h3>
                                Total: <span>10000000 $</span>
                            </h3>
                            <Button link={`/order`} text="Check Order"></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CartProduct;
