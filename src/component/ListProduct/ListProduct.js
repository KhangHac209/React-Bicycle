import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../useFetch";
import CardProduct from "../CardProduct/CardProduct";
const ListProduct = () => {
    const listProduct = useFetch("https://65e5c93dd7f0758a76e762d6.mockapi.io/product");

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
        <Container>
            <Title sub="Our Products" title="All Products"></Title>
            <div className="slider-container">
                <Slider {...settings}>
                    {listProduct && listProduct.map((item) => <CardProduct id={item.id} key={item.id} thumb={item.thumb} brand={item.brand} price={item.price} name={item.name}></CardProduct>)}
                </Slider>
            </div>
            <Title sub="Sale Off 30%" title="Sale Products"></Title>
            <div className="slider-container">
                <Slider {...settings}>
                    {listProduct && listProduct.map((item) => <CardProduct id={item.id} key={item.id} thumb={item.thumb} brand={item.brand} price={item.price} name={item.name}></CardProduct>)}
                </Slider>
            </div>
        </Container>
    );
};

export default ListProduct;
