import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Review.css";
import Title from "../Title/Title";
const Review = () => {
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
            <Title sub="Review" title="See What They Said About Us"></Title>

            <Slider {...settings}>
                <div className="review">
                    <img src="https://probike.templaza.net/wp-content/uploads/2023/08/33-300x300.jpg" alt="" />
                    <h3>Elizabeth Bailey - Customer</h3>
                    <p>“I had a fantastic experience today buying my first road bike. I'm pretty intimidated by the sport, but Wayne never treated me like I was stupid.”</p>
                </div>
                <div className="review">
                    <img src="https://probike.templaza.net/wp-content/uploads/2023/08/co-founder2-300x300.jpg" alt="" />
                    <h3>Jack Sparrow - Customer</h3>
                    <p>"I brought my Trek bike in to get the brakes adjusted. Not only did Daniel see me right away, but also he went above-and-beyond in checking out the bike."</p>
                </div>
                <div className="review">
                    <img src="https://probike.templaza.net/wp-content/uploads/2023/08/Why-Choose-Us.jpg" alt="" />
                    <h3>Shannon - Customer</h3>
                    <p>"I just purchased a 2013 Domane from the Springfield store. I want to pass along to you that I had an excellent experience working with them."</p>
                </div>
                <div className="review">
                    <img src="https://probike.templaza.net/wp-content/uploads/2023/08/co-founder1.jpg" alt="" />
                    <h3>Majida - Customer</h3>
                    <p>"I had a great experience with the salesmen who helped me. I wanted to let you know your staff have earned a loyal customer."</p>
                </div>
            </Slider>
        </Container>
    );
};

export default Review;
