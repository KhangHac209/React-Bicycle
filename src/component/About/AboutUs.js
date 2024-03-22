import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./AboutUs.css";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
const AboutUs = () => {
    return (
        <Container className="pe-3 my-3">
            <div className="about">
                <Row>
                    <Col lg={6} md={12}>
                        <div className="thumb">
                            <img src="https://probike.templaza.net/wp-content/uploads/2023/08/About-Us-2.jpg" alt="" />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <Title sub="About Us" title="Bicycles Are Our Works, But Also Our Passion"></Title>
                        <p>
                            Each of us has our own challenges, goals and reasons to ride. At Go Cycle, our purpose is to help you unleash your full potential no matter the chosen path. We do this with
                            our products, our people and the stories we share. Come feel what it's like to be limitless. Come ride with us.
                        </p>
                        <p>
                            Go Cycle is the world's leading brand of high-quality bicycles and cycling gear. Part of the Probike Group, which was founded in 1972, the brand combines craftsmanship,
                            technology and innovative design.
                        </p>
                        <NavLink to="/about">
                            <Button link="/about" text="More About Us"></Button>
                        </NavLink>
                    </Col>
                </Row>
            </div>
            <div className="about my-5 ">
                <Row className="flex-row-reverse">
                    <Col lg={6} md={12}>
                        <div className="thumb">
                            <img src="https://probike.templaza.net/wp-content/uploads/elementor/thumbs/Why-Choose-Us-qb0yhwapwtbo1u2f2e93ndhhbbfdnlgmvl8ttzgnko.jpg" alt="" />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <Title sub="WHY CHOOSE US" title="Ride With Style, Convenient, Safe And Relaxed"></Title>
                        <p>
                            Go Cycle has long been one of cycling's main catalysts for change. We introduced lighter, stronger aluminum frames at a time when the industry standard was steel. We were
                            first to make carbon fiber bikes widely available to the world. We defined the look and feel of modern road racing bikes with our Compact Road technology.
                        </p>
                        <NavLink to="/about">
                            <Button link="/about" text="More About Us"></Button>
                        </NavLink>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default AboutUs;
