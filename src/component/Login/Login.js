import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const [inputValueLogin, setInputValueLogin] = useState({
        username: "",
        password: "",
    });
    const [inputValueRegister, setInputValueRegister] = useState({
        emailRegister: "",
        passwordRegister: "",
        rePassword: "",
    });
    const handleValueLogin = (e) => {
        setInputValueLogin({
            ...inputValueLogin,
            [e.target.name]: e.target.value,
        });
    };
    const handleValueRegister = (e) => {
        setInputValueRegister({
            ...inputValueRegister,
            [e.target.name]: e.target.value,
        });
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        const user = await axios.get("https://6601646487c91a11641abc50.mockapi.io/user");
        const checkUser = user.data.find((item) => item.emailRegister === inputValueLogin.username);
        console.log(checkUser);
        if (checkUser) {
            if (inputValueLogin.password === checkUser.passwordRegister) {
                toast.success("Login success !", {
                    position: "top-center",
                    autoClose: 1000,
                });
                navigate("/");
                localStorage.setItem("LIST_LOGIN", JSON.stringify(user));
            } else {
                toast.error("Wrong Input", {
                    position: "top-center",
                    autoClose: 1000,
                });
            }
        } else {
            toast.warn("No Account", {
                position: "top-center",
                autoClose: 1000,
            });
        }
    };
    const handleRegister = async (e) => {
        e.preventDefault();

        if (inputValueRegister.passwordRegister !== inputValueRegister.rePassword) {
            alert("Passwords do not match");
            return;
        }
        const user = await axios.get("https://6601646487c91a11641abc50.mockapi.io/user");
        const checkRegister = user.data.find((item) => item.emailRegister === inputValueRegister.emailRegister);
        if (checkRegister) {
            toast.error("Email / Username already exists", {
                position: "top-center",
                autoClose: 1000,
            });
        } else {
            const response = await axios.post("https://6601646487c91a11641abc50.mockapi.io/user", {
                ...inputValueRegister,
            });
            toast.success("Registed success !", {
                position: "top-center",
                autoClose: 1000,
            });
            setInputValueRegister({
                emailRegister: "",
                passwordRegister: "",
                rePassword: "",
            });
        }
    };

    return (
        <div className="loginRegister">
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="login">
                            <h2>LOGIN</h2>
                            <h3>If you have an account with us, Please log in!</h3>
                            <form onSubmit={handleLogin}>
                                <div className="name">
                                    <h4>Email / Username:</h4>
                                    <input onChange={handleValueLogin} name="username" type="text" placeholder="Email / UserName" />
                                </div>
                                <div className="password">
                                    <h4>Password:</h4>
                                    <input onChange={handleValueLogin} name="password" type="password" placeholder="Password" />
                                </div>
                                <button>Log In</button>
                            </form>
                        </div>
                    </Col>
                    <Col>
                        <div className="register">
                            <h2>Register</h2>
                            <h3>If you have no an account with us, Please register!</h3>
                            <form onSubmit={handleRegister}>
                                <div className="name">
                                    <h4>Email / Username:</h4>
                                    <input onChange={handleValueRegister} name="emailRegister" type="text" placeholder="Email / UserName" />
                                </div>
                                <div className="password">
                                    <h4>Password:</h4>
                                    <input onChange={handleValueRegister} name="passwordRegister" type="password" placeholder="Password" />
                                    <h4>Re-Password:</h4>
                                    <input onChange={handleValueRegister} name="rePassword" type="password" placeholder="Re-Password" />
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
