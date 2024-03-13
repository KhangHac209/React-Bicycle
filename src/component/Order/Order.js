import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./Order.css";
import CartProduct from "../CartProduct/CartProduct";
import Button from "../Button/Button";
const Order = () => {
    return (
        <div className="order">
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <div className="inform">
                            <h2>Shipping Address</h2>
                            <div className="name">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <div className="address">
                                <input type="email" placeholder="Your email" />
                                <input type="text" placeholder="Address" />
                                <input type="text" placeholder="City/Town" />
                            </div>
                            <textarea name="note" id="" cols="40" rows="10" placeholder="Note"></textarea>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="cartOrder">
                            <h2>Your Order</h2>
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
                                            <input type="text" value={1} />
                                        </td>
                                        <td>100.000 $</td>
                                        <td>
                                            <i class="fa-solid fa-trash"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="total">
                            <h2>Cart Totals</h2>
                            <div className="totalPrice">
                                <div className="coupon">
                                    <input type="text" placeholder="Coupon Code" />
                                    <a href="">Submit</a>
                                </div>
                                <h3>
                                    Quantity: <span>4</span>
                                </h3>
                                <h3>
                                    Total: <span>1000.000$</span>
                                </h3>
                            </div>
                            <Button text="Place Order"></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Order;
