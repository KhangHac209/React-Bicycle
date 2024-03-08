import React from "react";
import { Col, Container, Form, Nav, NavLink, Navbar, Row } from "react-bootstrap";
import logo from "../../../src/assets/logoBicycle.png";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <Row>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <Navbar expand="lg" className="bg-body-dark">
                        <Container>
                            <Navbar.Brand href="#">
                                <NavLink to="/">
                                    <img src={logo} alt="" />
                                </NavLink>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                    <div className="inform">
                        <h5>Address:</h5>
                        <p>31/2 Nguyen Binh Khiem, P.Dakao, Q.1</p>
                        <h5>Phone:</h5>
                        <p>0708240602</p>
                        <h5>Email:</h5>
                        <p>khangvo20p@gmail.com</p>
                        <div className="icon">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/vo.khang.9847" target="_blank">
                                        <i class="fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/vhk209/" target="_blank">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                                        <i class="fa-solid fa-envelope"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <h2>Company</h2>
                    <ul>
                        <li>
                            <NavLink to="/about">About us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">Our Bikes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <h2>Help Center</h2>
                    <ul>
                        <li>
                            <NavLink to="/about">Our Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">Device</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About us</NavLink>
                        </li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <h2>Opening Hours</h2>
                    <ul className="opening">
                        <li>Mon-Fri:</li>
                        <span>8:00 - 22:00</span>
                        <li>Saturday:</li>
                        <span>8:00 - 22:00</span>
                        <li>Sunday:</li>
                        <span>8:00 - 18:00</span>
                    </ul>
                </Col>
            </Row>
            <div className="line">
                <p>
                    Copyright &#169; 2024 <span>GO CYCLE</span> by <span>Khang</span>. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
