import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.286794657034!2d106.69998057485708!3d10.789332489360246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b52bdeeced%3A0xa98faf7dce7d7a12!2zMzEvMiBOZ3V54buFbiBC4buJbmggS2hpw6ptLCDEkGEgS2FvLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1711110609673!5m2!1svi!2s"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <Title title="Contact Info"></Title>
                        <p>
                            At Go Cycle, we strongly believe that your online bike shop should be the hub for your everyday bicycling needs. Your local authorized Go Cycle retailer should be able to
                            provide the best services for you and your bicycle.
                        </p>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="info">
                            <h3>Tp.Ho Chi Minh</h3>
                            <p>31/2 Nguyen Binh Khiem, P.Dakao, Q.1</p>
                            <p>(+84) 708-240-602</p>
                            <p>khangvo20p@gmail.com</p>
                        </div>
                    </Col>
                    {/* <Col lg={6} md={6}>
                        <form onSubmit={handleSendMess}>
                            <Title title="Get In Touch"></Title>
                            <div className="name">
                                <input ref={inputRef} name="last_name" type="text" placeholder="Your Name" onChange={handleValue} />
                                <input ref={inputRef} name="email" type="text" placeholder="Your Email" onChange={handleValue} />
                            </div>
                            <textarea ref={inputRef} name="note" type="text" placeholder="Your Message" onChange={handleValue} />
                            <button className="send">Send Message</button>
                        </form>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
