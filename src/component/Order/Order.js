import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./Order.css";
import CartProduct from "../CartProduct/CartProduct";
import Button from "../Button/Button";
import { useCart } from "../../CartContext";
const Order = () => {
    const { cart, deleteCart } = useCart();
    const [listCart, setListCart] = useState(cart);
    const handleChange = (id, type) => {
        const newCart = [...listCart];
        const indexProduct = listCart.findIndex((item) => item.id === id);
        console.log(indexProduct);
        if (type === "delete") {
            newCart.splice(indexProduct, 1);
            deleteCart(indexProduct);
        }
        setListCart(newCart);
        localStorage.setItem("LIST_BICYLE", JSON.stringify(newCart));
    };
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
                                        <th>ID</th>
                                        <th>Name Product</th>
                                        <th>Image</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listCart &&
                                        listCart.map((item) => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <img src={item.thumb} alt="" />
                                                </td>
                                                <td>
                                                    <div className="plus-minus">
                                                        <input type="text" value={item.quantity} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="price">
                                                        {item.discount === 0 ? (
                                                            <span className={` ${item.discount !== 0 && "priceOld"}`}>{item.price * item.quantity}.00 $</span>
                                                        ) : (
                                                            <span>
                                                                {item.discount !== 0 && <div className="priceDiscount">{(item.price - item.price * (item.discount / 100)) * item.quantity}.00 $</div>}
                                                            </span>
                                                        )}
                                                    </p>
                                                </td>

                                                <td>
                                                    <i class="fa-solid fa-trash" onClick={() => handleChange(item.id, "delete")}></i>
                                                </td>
                                            </tr>
                                        ))}
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
                                    Quantity: <span>{listCart.reduce((total, item) => total + item.quantity, 0)}</span>
                                </h3>
                                <h3>
                                    Total:{" "}
                                    <span>
                                        <span>
                                            {listCart.reduce((total, item) => {
                                                if (item.discount != 0) {
                                                    return total + (item.price - item.price * (item.discount / 100)) * item.quantity;
                                                } else {
                                                    return total + item.price * item.quantity;
                                                }
                                            }, 0)}
                                            .00 $
                                        </span>
                                    </span>
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
