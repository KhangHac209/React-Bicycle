import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Button from "../Button/Button";
import "./CartProduct.css";
import { useCart } from "../../CartContext";
const CartProduct = () => {
    const { cart, deleteCart } = useCart();
    const [listCart, setListCart] = useState(cart);
    console.log(cart);
    const handleChange = (id, type) => {
        const newCart = [...listCart];
        const indexProduct = listCart.findIndex((item) => item.id === id);
        console.log(indexProduct);
        if (type === "plus") {
            newCart[indexProduct].quantity++;
        } else if (type === "minus") {
            if (newCart[indexProduct].quantity > 1) {
                newCart[indexProduct].quantity--;
            }
        } else if (type === "delete") {
            newCart.splice(indexProduct, 1);
            deleteCart(indexProduct);
        }
        setListCart(newCart);
        localStorage.setItem("LIST_BICYLE", JSON.stringify(newCart));
    };

    return (
        <div className="cart">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={6}>
                        <Table>
                            <thead>
                                <tr>
                                    <th className="thID">ID</th>
                                    <th className="thName">Name Product</th>
                                    <th className="thImg">Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listCart &&
                                    listCart.map((item) => (
                                        <tr>
                                            <td className="thID">{item.id}</td>
                                            <td>{item.name}</td>
                                            <td className="thImg">
                                                <img src={item.thumb} alt="" />
                                            </td>
                                            <td>
                                                <p className="price">
                                                    <span className={` ${item.discount !== 0 && "priceOld"}`}>{item.price}.00 $</span>{" "}
                                                    <span>{item.discount !== 0 && <div className="priceDiscount">{item.price - item.price * (item.discount / 100)}.00 $</div>}</span>
                                                </p>
                                            </td>
                                            <td>
                                                <div className="plus-minus">
                                                    <i className="fa-solid fa-minus" onClick={() => handleChange(item.id, "minus")}></i>
                                                    <input type="text" value={item.quantity} />
                                                    <i className="fa-solid fa-plus" onClick={() => handleChange(item.id, "plus")}></i>
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
                                                <i className="fa-solid fa-trash" onClick={() => handleChange(item.id, "delete")}></i>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={6}>
                        <div className="total">
                            <h3>
                                Total:{" "}
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
