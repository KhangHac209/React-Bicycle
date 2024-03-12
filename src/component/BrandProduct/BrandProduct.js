import React, { useEffect, useState } from "react";
import "./BrandProduct.css";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";
import useFetch from "../../useFetch";
import CardProduct from "../CardProduct/CardProduct";
const BrandProduct = () => {
    const listProduct = useFetch("https://65e5c93dd7f0758a76e762d6.mockapi.io/product");
    const [choice, setChoice] = useState(1);
    const [filterProduct, setFilterProduct] = useState();
    useEffect(() => {
        const optionChoice = listProduct.filter((item) => item.brand === "Lapierre");
        setFilterProduct(optionChoice);
    }, [listProduct]);
    const handleChoice = (choice, type) => {
        setChoice(choice);
        const optionChoice = listProduct.filter((item) => item.brand === type);
        setFilterProduct(optionChoice);
    };
    return (
        <div className="brand">
            <Container>
                <Title sub="Brand Bicycle" title="Popular Products"></Title>
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
                <Row>
                    {filterProduct &&
                        filterProduct.map((item) => (
                            <Col lg={4}>
                                <CardProduct id={item.id} key={item.id} discount={item.discount} thumb={item.thumb} brand={item.brand} price={item.price} name={item.name}></CardProduct>
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default BrandProduct;
