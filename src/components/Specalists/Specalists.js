import React from 'react';
import { Card, Container,Row} from 'react-bootstrap';
import './Specialists.css';

const Specalists = () => {
    return (
        <div  id ="doctors" className="specialist-container">
            <Container>

                <Row>
                    <h2 className="text-center specialist-heading">Our Specialists</h2>
                </Row>
                <Row>
                    <div className="doctor-list pb-5">
                    <Card>
                        <Card.Img variant="top" src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/doctor-new-1.jpg" className="img-fluid"/>
                        <Card.Body>
                            <Card.Title>Name: Kabir</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>    
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/doctor-new-4.jpg" className="img-fluid"/>
                        <Card.Body>
                            <Card.Title>Name: Rafeun</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>    
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/doctor-new-3.jpg" className="img-fluid"/>
                        <Card.Body>
                            <Card.Title>Name: Rayhan</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>    
                    </Card>     
                    </div>      
                </Row>
            </Container>
        </div>
    );
};

export default Specalists;