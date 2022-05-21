import React from 'react';
import Swal from 'sweetalert2';

const UsersRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                Swal.fire(
                    'Congratulation!',
                    'Successfully Made An Admin!',
                    'success'
                )

            })
    }
    return (
        <>
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td>Quality Control Specialist</td>
                <td>
                    {
                        role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs text-white bg-primary border-0">Make Admin</button>
                    }
                </td>
                <td>
                    <button class="btn btn-xs text-white">Remove User</button>
                </td>
            </tr>
        </>
    );
};

export default UsersRow;