import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner-section">
            <Container fluid >
                <Row>
                    <Col xs={12} md={6}>
                        <div className="banner-text">
                            <h5>#  KEEPING TEETH CLEAN</h5>
                            <h1 className="mb-3">Top <span className="bold">Personalized</span> Dental Care Services</h1>
                            <p>Top Dentist of the City give Treatment There. We treat our every patient with great care. Our Doctors are also well trained and expert in their field.</p>
                            <Button className="btn-appoinment me-3" variant="secondary">Book Appoinment</Button>
                            <Button className="btn-consult" variant="secondary">Get Free Consultant</Button>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="banner-img">
                            <img className="img-fluid" src="https://i.ibb.co/dcHt5hs/main-banner.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
};

export default Banner;