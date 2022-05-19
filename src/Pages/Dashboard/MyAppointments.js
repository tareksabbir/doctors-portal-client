import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
        }
    }, [user])


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Patient</th>
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Time</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.doctor}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;