import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useFetch from "../../useFetch";
import { useParams } from "react-router-dom";
import "./DetailProduct.css";
import Button from "../Button/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const DetailProduct = () => {
    const { slug: id } = useParams();
    const listProduct = useFetch(`https://65e5c93dd7f0758a76e762d6.mockapi.io/product/${id}`);
    const [pic, setPic] = useState();

    useEffect(() => {
        setPic(listProduct.thumb);
    }, [listProduct]);
    console.log(pic);
    const handlePic = (pic) => {
        setPic(pic);
    };
    useEffect(() => {
        const handleResize = () => {
            // Cập nhật số lượng slidesToShow và slidesToScroll dựa trên kích thước màn hình
            let slidesToShow = 3;
            let slidesToScroll = 2;
            if (window.innerWidth <= 768) {
                slidesToShow = 3;
                slidesToScroll = 2;
            }
            if (window.innerWidth <= 576) {
                slidesToShow = 2;
                slidesToScroll = 1;
            }
            setSettings({
                ...settings,
                slidesToShow,
                slidesToScroll,
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Gọi hàm một lần để cài đặt ban đầu

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array ensures that effect runs only once on mount

    const [settings, setSettings] = useState({
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
    });
    return (
        <div className="detail">
            <Container>
                <Row>
                    <Col md={6}>
                        <img className="thumb" src={pic} alt="" />

                        <Slider {...settings}>{listProduct.thumb_detail && listProduct.thumb_detail.map((item) => <img onClick={() => handlePic(item)} src={item} alt="" />)}</Slider>
                    </Col>
                    <Col md={6}>
                        <div className="title">
                            <h2>{listProduct.name}</h2>
                            <p className="price">
                                <span className={` ${listProduct.discount !== 0 && "priceOld"}`}>{listProduct.price}.00 $</span>{" "}
                                <span>{listProduct.discount !== 0 && <div className="priceDiscount">{listProduct.price - listProduct.price * (listProduct.discount / 100)}.00 $</div>}</span>
                            </p>{" "}
                            <p>{listProduct.description}</p>
                        </div>
                        <div className="choose">
                            <div className="plus-minus">
                                <i class="fa-solid fa-minus"></i>
                                <input type="text" value={1} />
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <Button text="ADD TO CART"></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailProduct;
