import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="service-container mt-5">
           <Container>
           <Row>
            <div className="single-service">
            {
                services.map(service=> <Service
                 key ={service.service_id}
                 service ={service}
                >
                </Service>)
            }
            </div>
           </Row>
           </Container>
        </div>
    );
};

export default Services;