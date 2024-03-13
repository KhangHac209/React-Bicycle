import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
const Button = (props) => {
    return <Link to={props.link} className="button">{props.text}</Link>;
};

export default Button;
