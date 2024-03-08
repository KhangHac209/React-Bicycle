import React from "react";
import "./CardProduct.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardProduct = (props) => {
    return (
        <Container className="pe-3">
            <Row>
                <Col>
                    <Link to={`/detail/${props.id}`} className="card-product pe-3">
                        <div className="thumb">
                            <img src={props.thumb} alt="" />
                            <div className="sale"></div>
                        </div>
                        <div className="title">
                            <h3>{props.brand}</h3>
                            <h2>{props.name}</h2>
                        </div>
                        <p>{props.price}.00 $</p>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default CardProduct;
