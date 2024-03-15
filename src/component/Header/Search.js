import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import CardProduct from "../CardProduct/CardProduct";

const Search = () => {
    const { slug: keySearch } = useParams();
    const findKeySearch = keySearch.toLowerCase();
    const listProduct = useFetch("https://65e5c93dd7f0758a76e762d6.mockapi.io/product");
    const filterProduct = listProduct.filter((item) => item.brand.toLowerCase().includes(findKeySearch));

    return (
        <div className="listSearch">
            <Container>
                <div className="title">
                    <h3>List Product</h3>
                    <h2>Search: {keySearch}</h2>
                </div>
                <Row>
                    {filterProduct &&
                        filterProduct.map((item) => {
                            if (keySearch) {
                                return (
                                    <Col key={item.id} md={4}>
                                        <CardProduct id={item.id} key={item.id} discount={item.discount} thumb={item.thumb} brand={item.brand} price={item.price} name={item.name}></CardProduct>
                                    </Col>
                                );
                            }
                            return null;
                        })}
                </Row>
            </Container>
        </div>
    );
};

export default Search;
