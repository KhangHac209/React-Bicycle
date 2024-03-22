import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Products.css";
import CardProduct from "../CardProduct/CardProduct";
import useFetch from "../../useFetch";
const Products = () => {
    const listProduct = useFetch("https://65e5c93dd7f0758a76e762d6.mockapi.io/product");
    const [choice, setChoice] = useState();
    const [filterProduct, setFilterProduct] = useState();
    const [filterName, setFilterName] = useState("All Products");
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 100000 });
    useEffect(() => {
        setFilterProduct(listProduct);
    }, [listProduct]);
    const handleChoice = (choice, type) => {
        setChoice(choice);
        setFilterName(type);
    };
    const [price, setPrice] = useState();
    const handlePrice = (price, min, max) => {
        setPrice(price);
        setPriceFilter({ min, max });
    };
    useEffect(() => {
        const filteredProduct = listProduct.filter((item) => {
            if (filterName == "All Products") {
                return item.price >= priceFilter.min && item.price <= priceFilter.max;
            } else {
                return item.brand === filterName && item.price >= priceFilter.min && item.price <= priceFilter.max;
            }
        });
        setFilterProduct(filteredProduct);
    }, [choice, price]);
    return (
        <div className="products">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="brand">
                            <h2>Brand Products</h2>
                            {/* <div className="inputSearch">
                                <input type="text" placeholder="Search Brand Products" />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div> */}
                            <ul className="option">
                                <li onClick={() => handleChoice(1, "Lapierre")} className={`choice ${choice === 1 && "active"}`}>
                                    Lapierre
                                </li>
                                <li onClick={() => handleChoice(2, "Mondraker")} className={`choice ${choice === 2 && "active"}`}>
                                    Mondraker
                                </li>
                                <li onClick={() => handleChoice(3, "Cruzee")} className={`choice ${choice === 3 && "active"}`}>
                                    Cruzee
                                </li>
                                <li onClick={() => handleChoice(4, "Cube")} className={`choice ${choice === 4 && "active"}`}>
                                    Cube
                                </li>
                                <li onClick={() => handleChoice(5, "Radon")} className={`choice ${choice === 5 && "active"}`}>
                                    Radon
                                </li>
                                <li onClick={() => handleChoice(6, "Giant")} className={`choice ${choice === 6 && "active"}`}>
                                    Giant
                                </li>
                            </ul>
                        </div>
                        <div className="brand">
                            <h2>Price</h2>
                            <ul className="option">
                                <li onClick={() => handlePrice(1, 0, 100)} className={`choice ${price === 1 && "active"}`}>
                                    0 - 100 $
                                </li>
                                <li onClick={() => handlePrice(2, 100, 200)} className={`choice ${price === 2 && "active"}`}>
                                    100 $ - 200 $
                                </li>
                                <li onClick={() => handlePrice(3, 200, 300)} className={`choice ${price === 3 && "active"}`}>
                                    200 $ - 300 $
                                </li>
                                <li onClick={() => handlePrice(4, 300, 400)} className={`choice ${price === 4 && "active"}`}>
                                    300 $ - 400 $
                                </li>
                                <li onClick={() => handlePrice(5, 400, 500)} className={`choice ${price === 5 && "active"}`}>
                                    400 $ - 500 $
                                </li>
                                <li onClick={() => handlePrice(6, 500, 100000)} className={`choice ${price === 6 && "active"}`}>
                                    500 $ - 100000 ${" "}
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <h4>{filterName}</h4>
                            {filterProduct &&
                                filterProduct.map((item) => (
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
