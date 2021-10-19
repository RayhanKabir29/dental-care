import { useParams } from 'react-router';
const ServiceAppoinment = () => {
    

    const {apointmentID} = useParams();
    return (
        <div>
            <h2>BookingID: {apointmentID}</h2>
        </div>
    );
};

export default ServiceAppoinment;