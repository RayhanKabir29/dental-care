import React from 'react';
import { Col, Container, Row,Button, Card  } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div id="about-us" className="about-container">
            <Container fluid>
                <Row>
                    <Col xs={12} md={6}>
                    <div className="about-text">
                            <h5>#  CARE FOR EVERY PATIENT</h5>
                            <h1 className="mb-3">We Are A<span className="bold"> Award-Winning And Certified </span> Hospital</h1>
                            <p>Top Dentist of the City give Treatment There. We treat our every patient with great care. Our Doctors are also well trained and expert in their field.Top Dentist of the City give Treatment There. We treat our every patient with great care. Our Doctors are also well trained and expert in their field.</p>
                            <Button className="" variant="secondary">Read More</Button>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="about-service">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Quality Patients Care</Card.Title>
                                    <Card.Text>
                                    Top Dentist of the City give Treatment There. We treat our every patient with great care. Our Doctors are also well trained and expert in their field.Top Dentist 
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Experience Dentist</Card.Title>
                                    <Card.Text>
                                    Top Dentist of the City give Treatment There. We treat our every patient with great care. Our Doctors are also well trained and expert in their field.Top Dentist 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>New Technology</Card.Title>
                                    <Card.Text>
                                    Top Dentist of the City give Treatment There. We treat our every patient with great care. Our Doctors are also well trained and expert in their field.Top Dentist of the City give Treatment There. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Certified Dentist</Card.Title>
                                    <Card.Text>
                                    Top Dentist of the City give Treatment There. We treat our every patient with great care. Our Doctors are also well trained and expert in their field.Top Dentist of the City give Treatment There. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;