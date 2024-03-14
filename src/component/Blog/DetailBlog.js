import React, { useEffect } from "react";
import blog from "./DataBlog";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./DetailBlog.css";
const DetailBlog = () => {
    const { slug: id } = useParams();
    const blogDetail = blog.find((item) => item.id === Number(id));
    console.log(blogDetail);

    return (
        <div className="detailBlog">
            <Container>
                <div className="title">
                    <h3>{blogDetail.title}</h3>
                </div>
                <div className="thumb">
                    <img src={blogDetail.thumb} alt="" />
                </div>
                <h4>{blogDetail.desc}</h4>
                <p>{blogDetail.text}</p>
            </Container>
        </div>
    );
};

export default DetailBlog;
