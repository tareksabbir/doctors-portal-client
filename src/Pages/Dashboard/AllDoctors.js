import React, { useEffect, useState } from 'react';

const AllDoctors = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Doctors Name</th>
                            <th>Specialty</th>
                            <th>Degree</th>
                            {/* <th>Chamber</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((d, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{d.doctor}</td>
                                <td>{d.name}</td>
                                <td>{d.degree}</td>
                                {/* <td>{d.hospital}</td> */}
                            </tr>
                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDoctors;