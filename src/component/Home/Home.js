import React from "react";
import Banner from "./Banner";
import ListProduct from "../ListProduct/ListProduct";
import AboutUs from "../About/AboutUs";
import Review from "../Review/Review";
import BrandProduct from "../About/BrandProduct/BrandProduct";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ListProduct></ListProduct>
            <BrandProduct></BrandProduct>
            <AboutUs></AboutUs>
            <Review></Review>
        </div>
    );
};

export default Home;
