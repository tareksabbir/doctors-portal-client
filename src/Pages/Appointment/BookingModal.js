import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots, doctor } = treatment;
    const [user] = useAuthState(auth);

    const handaleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(slot)
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-rounded absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl text-black mb-3 text-center">{name}</h3>
                    <h3 className="font-bold text-sm text-primary mb-3 text-center">{doctor}</h3>
                    <form onSubmit={handaleBooking} className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input name='name' type="text" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input name='email' disabled type="email" value={user.email} className="input input-bordered w-full max-w-xs" />
                        <input disabled type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="submit" className="btn btn-primary w-full max-w-xs mb-5" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;