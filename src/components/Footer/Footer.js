import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <Row>
                <Col xs={12} md={4}>
                   <div className="location text-white">
                   <h2>Dental Care</h2>
                   <h4>Location: Dhaka Banladesh</h4>
                   <h4>Phone: +1234567</h4>
                   <h4>Email: dental@care.info</h4>
                   </div>
                </Col>
                <Col xs={12} md={4}>
                   <div className="footer-service text-white">
                   <h2>Our Services</h2>
                    <ul>
                        <li><Link>Cosmetic Dentistry</Link></li>
                        <li><Link>General Dentistry</Link></li>
                        <li><Link>Certified Dentist</Link></li>
                        <li><Link>New Technology</Link></li>
                        <li><Link>Accept Insurance</Link></li>
                    </ul>
                   </div>
                </Col>
                <Col xs={12} md={4}>
                   <h2 className="text-white">News Letter</h2>
                   <p className="text-white">Best solution for your it startup business consecteturadipiscing elit.</p>
                   <input type="email" name="" placeholder="Email" />
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;