import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import MakeAppointment from '../Home/MakeAppointment';
import ApBanner from './ApBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <>
            <ApBanner date={date} setDate={setDate}></ApBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <MakeAppointment></MakeAppointment>
            <Footer></Footer>
        </>
    );
};

export default Appointment;