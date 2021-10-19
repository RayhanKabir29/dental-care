import React, { useEffect, useState } from 'react';
import Doctor from "../Doctor/Doctor"

const Specalists = () => {
    const [doctors, setDoctors] = useState({});
    useEffect(()=>{
        fetch("services.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div>
            {doctors.map(doctor=><Doctor></Doctor>)}
        </div>
    );
};

export default Specalists;