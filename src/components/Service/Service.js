import React from 'react';
import { Card,Button} from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const{name, img,desc} = props.service;
    return (
        <>
            <Card>
                <Card.Img variant="top" src={img} className="img-fluid"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Service;