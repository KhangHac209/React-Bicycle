import React from "react";
import "./Title.css";
const Title = (props) => {
    return (
        <div className="title">
            <div className="hook">
                <h3>{props.sub}</h3>
            </div>
            <h2>{props.title}</h2>
        </div>
    );
};

export default Title;
