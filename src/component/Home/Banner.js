import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import Button from "../Button/Button";
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="https://probike.templaza.net/wp-content/uploads/2023/08/slide2.jpg" alt="" />
                <div className="text">
                    <h3>Here You Find Right City E-Bike</h3>
                    <p>Fast, fun, and functional. That’s what a boost of electric power means for your ride. Whether for recreation or transportation.</p>
                    <Button link={`/product`} text="discover now"></Button>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://probike.templaza.net/wp-content/uploads/2023/08/Home-2-Slider-3.jpg" alt="" />
                <div className="text">
                    <h3>It's Easy To Get Around</h3>
                    <p>
                        It's a fun-loving solution to so many of life’s challenges: parking, polluting, packing – and even pedaling, with powerful electric drive systems that make it fun and easy to
                        get around.
                    </p>
                    <Button link={`/product`} text="discover now"></Button>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
