import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
        }
    }, [user])


    return (
        <div>
            <h2>{appointments.length}</h2>
        </div>
    );
};

export default MyAppointments;