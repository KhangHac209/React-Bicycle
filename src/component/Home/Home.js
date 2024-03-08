import React from "react";
import Banner from "./Banner";
import ListProduct from "../ListProduct/ListProduct";
import AboutUs from "../About/AboutUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ListProduct></ListProduct>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
