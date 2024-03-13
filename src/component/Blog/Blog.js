import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog from "./DataBlog";
import Button from "../Button/Button";
import "./Blog.css";
import { Link } from "react-router-dom";
const Blog = () => {
    return (
        <div className="blog">
            <Container>
                <Row>
                    {blog &&
                        blog.map((item) => (
                            <Col lg={6} md={6} id={item.id} className="mt-3">
                                <Link to={`/detailBlog/${item.id}`}>
                                    <div className="thumb">
                                        <img src={item.thumb} alt="" />
                                        <p>Mark 3,2024</p>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <Button text="Read More"></Button>
                                </Link>
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default Blog;
