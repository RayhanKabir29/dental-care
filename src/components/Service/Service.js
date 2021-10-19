import React from 'react';
import { Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const{service_id,name, img,desc} = props.service;
    return (
        <>
            <Card>
                <Card.Img variant="top" src={img} className="img-fluid"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Link to = {`/appointment/${service_id}`}>
                    <Button variant="primary">Book Appoint For {name}</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Service;