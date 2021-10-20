import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from 'react-router-dom';
import './ServiceAppoinment.css';

const ServiceAppoinment = () => {
    let {apointmentID} = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    const [startDate, setStartDate] = useState(new Date());

    useEffect(()=>{
        fetch("/services.json")
        .then(result => result.json())
        .then(data => setServiceDetails(data))
        
    },[]);

    useEffect(()=>{
       const foundService= serviceDetails?.find(service => service?.service_id === apointmentID)
       setSingleService(foundService)
    },[serviceDetails])
    return (
        <div>
            <div className="single-services">
                <div className="service-img">
                <img src={singleService?.img} alt="" className="img-fluid"/>
                </div>
                <div className="service-info">
                <h2>Book Service For: {singleService?.name}</h2>
                <h3>Doctor Name: {singleService?.doctorName}</h3>
                <h4> Fee: ${singleService?.fee}</h4>
                 <DatePicker
                    isClearable
                    filterDate={d => {
                    return new Date() > d;
                    }}
                    placeholderText="Select Start Date"
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    onChange={date => setStartDate(date)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceAppoinment;