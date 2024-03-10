import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";
import "./Contact.css";
import Button from "../Button/Button";
const Contact = () => {
    return (
        <div className="contact">
            <img
                src="https://www.google.com/maps/vt/data=o0bCqjTFqz1ONVaJ_KXhzznSKWQ09G0w_H8Tsvvm0NeZCMM0IaDiJmY2qweszeO455EkxuNjyAajLlxRPD0761PH1JPONZ7dGvssUNRMaexhrZ5m1Ssre4XdsCbLR1xhl_zle1io00NiYcVF-TfgXocWZdpAzz2m53MxP-EwMAWGbZxSnsgEY4aWsdDbxhm5S49ta0jpeMkKsx9Z7W6Arub-BOHrgw"
                alt=""
            />
            <Container>
                <Row>
                    <Col>
                        <Title title="Contact Info"></Title>
                        <p>
                            At Go Cycle, we strongly believe that your online bike shop should be the hub for your everyday bicycling needs. Your local authorized Go Cycle retailer should be able to
                            provide the best services for you and your bicycle.
                        </p>
                        <div className="info">
                            <h3>TP.Ho Chi Minh</h3>
                            <p>31/2 Nguyen Binh Khiem, P.Dakao, Q.1</p>
                            <p>(+84) 708-240-602</p>
                            <p>khangvo20p@gmail.com</p>
                        </div>
                    </Col>
                    <Col>
                        <Title title="Get In Touch"></Title>
                        <div className="name">
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Your Email" />
                        </div>
                        <textarea className="mess" type="text" placeholder="Your Message" />
                        <Button text="Send Message"></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
