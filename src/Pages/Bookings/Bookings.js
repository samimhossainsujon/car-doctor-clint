/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Proveiders/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);



    //=================================
    //handel delete bookings
    //=================================

    const handelDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })

        }
    }


    //===============================
    //handel edit or update bookings
    //===============================

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'Confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updatedBooking = { ...bookings.find(booking => booking._id === id) };
                    updatedBooking.status = 'Confirm';
                    const newBookings = [updatedBooking, ...remaining];
                    setBookings(newBookings);
                }
            })
            
    }



    console.log(bookings);

    return (
        <div>
            <h2 className='text-5xl'>Your bookings: {bookings.length}</h2>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking}
                                booking={booking}
                                handelDelete={handelDelete}
                                handleBookingConfirm={handleBookingConfirm}

                            ></BookingRow>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Bookings;