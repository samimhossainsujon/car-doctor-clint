import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Proveiders/AuthProvider';
import Swal from 'sweetalert2';

const BookServices = () => {

    const service = useLoaderData();
    const { title, _id, price, img } = service

    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const order = {
            castomerName: name,
            email,
            date,
            service_id: _id,
            service: title,
            price: price,
            img,
        }
        console.log(order);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        icon: 'success',
                        title: 'done',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                }
            })

    }


    return (
        <div>
            <h2 className='text-center font-bold text-3xl mb-4'>booking service{title}</h2>

            <form onSubmit={handleBookService}>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <input type="text" defaultValue={user?.displayName} name='name' placeholder="Enter your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" name='date' placeholder='' className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <input type="email" defaultValue={user?.email} name='email' placeholder="Enter your email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <input type="" name='price' defaultValue={'$' + price} className="input input-bordered" />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className='btn  bg-[#FF3811]' type="submit" value="Order Confirm" />
                </div>

            </form>

        </div>
    );
};

export default BookServices;