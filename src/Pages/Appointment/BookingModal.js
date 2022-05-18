import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

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
                    <h3 className="font-bold text-xl text-primary mb-3 text-center">{name}</h3>
                    <form onSubmit={handaleBooking} className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input disabled type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-primary w-full max-w-xs mb-5" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;