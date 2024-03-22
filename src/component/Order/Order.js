import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./Order.css";
import { useCart } from "../../CartContext";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Order = () => {
    const { cart, deleteCart, deleteAllCart } = useCart();
    const [listCart, setListCart] = useState(cart);
    const navigate = useNavigate();
    const inputRef = useRef();
    useEffect(() => {
        if (listCart.length === 0) {
            toast.error("No Products In The Cart !", {
                position: "top-center",
                autoClose: 1000,
            });
            navigate("/");
        }
        inputRef.current.focus();
    }, [listCart, navigate]);
    const handleChange = (id, type) => {
        const newCart = [...listCart];
        const indexProduct = listCart.findIndex((item) => item.id === id);
        if (type === "delete") {
            newCart.splice(indexProduct, 1);
            deleteCart(indexProduct);
        }
        setListCart(newCart);
        localStorage.setItem("LIST_BICYLE", JSON.stringify(newCart));
    };

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        city: "",
        note: "",
    });
    const handleValue = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const sendInformOrder = async (e) => {
        e.preventDefault();
        if (!form.first_name || !form.last_name || !form.email || !form.address || !form.city || !form.note) {
            toast.warn("Please Enter Enough Information", {
                position: "top-center",
                autoClose: 2000,
            });
        } else {
            emailjs.sendForm("service_sx7m0za", "template_wpz117i", e.target, "eHzN2Rgcx89Iyg6ag").then(
                (result) => {
                    toast.success("Place Order Succeed !", {
                        position: "top-center",
                        autoClose: 2000,
                    });
                },
                (error) => {
                    toast.warn(`${error.text}`, {
                        position: "top-center",
                        autoClose: 2000,
                    });
                }
            );
            try {
                const response = await axios.post("https://65e5c93dd7f0758a76e762d6.mockapi.io/order", {
                    ...form,
                    listProduct: [...cart],
                });

                if (response.status === 201) {
                    navigate("/");
                    deleteAllCart();
                }
            } catch (error) {
                toast.error("Failed to place order", {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
        }
    };
    const handleBack = () => {
        navigate("/cart");
    };
    return (
        <div className="order">
            <Container>
                <i onClick={handleBack} class="fa-solid fa-angles-left back"></i>
                <form onSubmit={sendInformOrder}>
                    <Row>
                        <Col lg={6} md={6}>
                            <div className="inform">
                                <h2>Shipping Address</h2>
                                <div className="name">
                                    <input ref={inputRef} type="text" name="first_name" placeholder="First Name" onChange={handleValue} />
                                    <input type="text" name="last_name" placeholder="Last Name" onChange={handleValue} />
                                </div>
                                <div className="address">
                                    <input type="email" name="email" placeholder="Your email" onChange={handleValue} />
                                    <input type="text" name="address" placeholder="Address" onChange={handleValue} />
                                    <input type="text" name="city" placeholder="City/Town" onChange={handleValue} />
                                </div>
                                <textarea name="note" id="" cols="40" rows="10" placeholder="Note" onChange={handleValue}></textarea>
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
                                                <tr key={item.id}>
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
                                                                    {item.discount !== 0 && (
                                                                        <div className="priceDiscount">{(item.price - item.price * (item.discount / 100)) * item.quantity}.00 $</div>
                                                                    )}
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
                            </div>
                            <div className="total">
                                {/* <h2>Cart Totals</h2> */}
                                <div className="totalPrice">
                                    {/* <div className="coupon">
                                    <input type="text" placeholder="Coupon Code" />
                                    <a href="">Submit</a>
                                </div> */}
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
                                <button className="placeOrder" type="submit">
                                    Place Order
                                </button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
    );
};

export default Order;
