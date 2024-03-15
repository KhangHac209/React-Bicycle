import React, { useState } from "react";
import logo from "../../assets/logoBicycle.png";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";
const Header = () => {
    const [keySearch, setKeySearch] = useState();
    const navigate = useNavigate();
    const { cart } = useCart();
    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            console.log(keySearch);
            navigate(`/search/${keySearch}`);
            setKeySearch(""); // truyen value vao search
        }
    };
    return (
        <div className="header">
            <Container>
                <div className="info">
                    <div className="left">
                        <span>
                            <i class="fa-solid fa-location-dot"></i> 31/2 Nguyen Binh Khiem, P.Dakao, Q.1
                        </span>
                        <span>
                            <i class="fa-solid fa-phone"></i>
                            (+84) 708-240-602
                        </span>
                    </div>
                    <div className="right">
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
            </Container>
            <Navbar expand="lg" className="bg-body-dark">
                <Container>
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="choice me-auto my-5 my-lg-0" navbarScroll>
                            <NavLink to="/">HOME</NavLink>
                            <NavLink to="/about">ABOUT US</NavLink>
                            <NavLink to="/product">PRODUCTS</NavLink>
                            <NavLink to="/blog">BLOGS</NavLink>
                            <NavLink to="/contact">CONTACT</NavLink>
                        </Nav>
                        <div className="search d-flex">
                            <Form.Control
                                value={keySearch}
                                onChange={(e) => setKeySearch(e.target.value)}
                                onKeyDown={handleSearch}
                                type="search"
                                placeholder="Search Product"
                                className="inputSearch me-2"
                                aria-label="Search"
                            />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </Navbar.Collapse>
                    <Link to="/cart" className="cart">
                        <a className="fa-solid fa-cart-shopping"></a>
                        <span>{cart.length}</span>
                    </Link>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
