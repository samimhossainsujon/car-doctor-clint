import React from 'react';
import Swal from 'sweetalert2';

const BookingRow = ({ booking, handelDelete, handleBookingConfirm }) => {
    const { _id, date, service, price, img, status } = booking;

    


    return (
        <tr>
            <th>
                <button onClick={() => handelDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        {img && <img src={img} alt='' />}
                    </div>
                </div>

            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
 {
    status === 'Confirm' ? <span 
    className='font-bold text-primary'>confirmed</span> :
    <button onClick={() => handleBookingConfirm(_id)}
    className="btn btn-ghost btn-xs">please Confirm</button>
    }
            </th>
        </tr>
    );
};

export default BookingRow;