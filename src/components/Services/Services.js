import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
        <div id="services" className="service-container mt-5">
           <Container>
               <Row>
                   <h1 className="mb-5 about-heading">Enjoy Specialized <span className="text-bold">Care Through Precision</span>,<br /> Artistry, And Experience</h1>
               </Row>
           <Row>
            <Col className="single-service">
            {
                services.map(service=> <Service
                 key ={service.service_id}
                 service ={service}
                >
                </Service>)
            }
            </Col>
           </Row>
           </Container>
        </div>
    );
};

export default Services;