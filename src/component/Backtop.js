import React, { useState } from "react";
import "./Backtop.css";
const Backtop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return (
        <div className={`back-to-top ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
            <i className="fa-solid fa-arrow-up"></i>
        </div>
    );
};

export default Backtop;
