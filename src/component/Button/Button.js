import React from "react";
import "./Button.css";
const Button = (props) => {
    return <a className="button">{props.text}</a>;
};

export default Button;
