import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className="services-container">
            
        </div>
    );
};

export default Services;