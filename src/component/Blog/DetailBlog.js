import React, { useEffect } from "react";
import blog from "./DataBlog";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./DetailBlog.css";
const DetailBlog = () => {
    const { slug: id } = useParams();
    const blogDetail = blog.find((item) => item.id === Number(id));
    console.log(blogDetail);

    return (
        <div className="detailBlog">
            <Container>
                <Row>
                    <Col lg={8} md={8}>
                        <div className="title">
                            <h3>{blogDetail.title}</h3>
                        </div>
                        <div className="thumb">
                            <img src={blogDetail.thumb} alt="" />
                        </div>
                        <h4>{blogDetail.desc}</h4>
                        <p>{blogDetail.text}</p>
                        <h3>HOW TO OPTIMISE YOUR PROTEIN STRATEGY FOR CYCLING</h3>
                        <p>
                            The Lite version of the popular SingleTrack II shorts features a familiar tailored fit and length with a ‘barely there’ feel, being lightweight and breathable without
                            compromising durability. A zippered fly with a popper closure gives the shorts a clean look and elasticated Velcro adjuster tabs enable you to fine-tune the fit around the
                            waist. There are three well-sized zippered pockets – two on the front and one on the rear. The high elastane content ensures stretch in all directions for an excellent fit,
                            which can be altered via the adjuster tabs on the waistband.
                        </p>
                        <img src="https://probike.templaza.net/wp-content/uploads/2023/07/claudio-schwarz-UwWN33MH6IM-unsplash.jpg" alt="" />
                        <p>The 13-inch inseam length of the regular version works perfectly with knee pads, and the shorter 10-inch version is great without protection.</p>
                    </Col>
                    <Col lg={4} md={4}>
                        <div className="thumbleft">
                            <img src="https://probike.templaza.net/wp-content/uploads/2023/09/about-alice.png" alt="" />
                            <h3>Alice Hayes</h3>
                            <p>Probike is the world's leading brand of high-quality bicycles and cycling gear. Part of the Probike Group, which was founded in 1972.</p>
                        </div>
                        <div className="recent">
                            <h2>Recent Post</h2>
                            {blog &&
                                blog.map((item) => (
                                    <div className="list">
                                        <div className="thumb">
                                            <img src={item.thumb} alt="" />
                                        </div>
                                        <div className="title">
                                            <h3>{item.title}</h3>
                                            <p>Mark 3,2024</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailBlog;
