import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
const Login = () => {
    const [inputValue, setInputValue] = useState({
        username: "",
        password: "",
        emailRegister: "",
        passwordRegister: "",
        rePassoword: "",
    });
    const handleValue = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
        console.log(inputValue);
    };
    return (
        <div className="loginRegister">
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="login">
                            <h2>LOGIN</h2>
                            <h3>If you have an account with us, Please log in!</h3>
                            <form>
                                <div className="name">
                                    <h4>Email / Username:</h4>
                                    <input onChange={handleValue} name="username" type="text" placeholder="Email / UserName" />
                                </div>
                                <div className="password">
                                    <h4>Password:</h4>
                                    <input onChange={handleValue} name="password" type="password" placeholder="Password" />
                                </div>
                                <button>Log In</button>
                            </form>
                        </div>
                    </Col>
                    <Col>
                        <div className="register">
                            <h2>Register</h2>
                            <h3>If you have no an account with us, Please register!</h3>
                            <form action="">
                                <div className="name">
                                    <h4>Email / Username:</h4>
                                    <input onChange={handleValue} name="emailRegister" type="text" placeholder="Email / UserName" />
                                </div>
                                <div className="password">
                                    <h4>Password:</h4>
                                    <input onChange={handleValue} name="passwordRegister" type="password" placeholder="Password" />
                                    <h4>Re-Password:</h4>
                                    <input onChange={handleValue} name="rePassoword" type="password" placeholder="Re-Password" />
                                </div>
                                <button>Register</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
