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
                            {props.discount === 30 && <div className="sale">{props.discount}%</div>}
                        </div>
                        <div className="title">
                            <h3>{props.brand}</h3>
                            <h2>{props.name}</h2>
                        </div>
                        <p className="price">
                            <span className={` ${props.discount !== 0 && "priceOld"}`}>{props.price}.00 $</span>{" "}
                            <span>{props.discount !== 0 && <div className="priceDiscount">{props.price - props.price * (props.discount / 100)}.00 $</div>}</span>
                        </p>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default CardProduct;
